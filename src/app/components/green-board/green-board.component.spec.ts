import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBoardComponent } from './green-board.component';

describe('GreenBoardComponent', () => {
  let component: GreenBoardComponent;
  let fixture: ComponentFixture<GreenBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
