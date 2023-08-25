import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBoardComponent } from './blue-board.component';

describe('BlueBoardComponent', () => {
  let component: BlueBoardComponent;
  let fixture: ComponentFixture<BlueBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
