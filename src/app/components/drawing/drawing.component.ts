import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vt-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css'],
})
export class DrawingComponent implements OnInit, OnDestroy {
  @ViewChild('canvasElement', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;

  private socket!: io.Socket;
  private context!: CanvasRenderingContext2D;
  private isDrawing = false;
  sessionId!: string;
  @Input() boardName:string = '';

  constructor(private router: ActivatedRoute) {
    this.socket = io.connect('http://localhost:3000'); // socket server endpoint
  }

  ngOnInit(): void {
    this.initDrawing();
  }

  /**
   * @author Vikas Tiwari
   * @description It initialise the canvas reference and socket connection
  */
  initDrawing() {
    this.context = this.canvasElement.nativeElement.getContext('2d') as CanvasRenderingContext2D;

    this.socket.on('drawing', (dataObj: any) => {
      this.sessionId = this.socket.id;
      const { sessionId, data } = dataObj;
      this.canvasRemoteDrawHandler(sessionId, data);
    });

    this.socket.on('stopdrawing', (dataObj: any) => {
      this.context.moveTo(dataObj.x, dataObj.y);
    });
  }

  /**
   * @author Vikas Tiwari
   * @description It handles the mousedown event
  */
  startDrawing(event: MouseEvent): void {
    this.isDrawing = true;
    this.context.moveTo(event.offsetX, event.offsetY);

    const data = { x: event.offsetX, y: event.offsetY };
    this.socket.emit('stopdrawing', data);
  }

  /**
   * @author Vikas Tiwari
   * @description It handles the mousemove event
  */
  draw(event: MouseEvent): void {
    if (!this.isDrawing) return;
    this.context.lineTo(event.offsetX, event.offsetY);
    this.context.stroke();

    // emits {x,y} coordinate to the server
    this.socket.emit('drawing', {
      x: event.offsetX,
      y: event.offsetY,
    });
  }

  /**
   * @author Vikas Tiwari
   * @description It handles the mouseup event
  */
  endDrawing(): void {
    this.isDrawing = false;
  }

  /**
   * @author Vikas Tiwari
   * @description It handles continuous line on mousemove
   */
  canvasRemoteDrawHandler(sessionId: string, data: { x: number; y: number }): void {
    console.log("otherSession: ", sessionId, 'currentSession: ', this.sessionId);
    this.context.lineTo(data.x, data.y);
    this.context.stroke();
  }

  /**
   * @author Vikas Tiwari
   * @description It cleans the subscription
  */
  ngOnDestroy(): void {
  }
}
