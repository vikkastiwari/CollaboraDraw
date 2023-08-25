import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DrawingComponent } from './components/drawing/drawing.component';
import { BlueBoardComponent } from './components/blue-board/blue-board.component';
import { GreenBoardComponent } from './components/green-board/green-board.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawingComponent,
    BlueBoardComponent,
    GreenBoardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
