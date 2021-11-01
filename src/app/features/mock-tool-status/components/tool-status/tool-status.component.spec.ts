import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolStatusComponent } from './tool-status.component';

describe('ToolStatusComponent', () => {
  let component: ToolStatusComponent;
  let fixture: ComponentFixture<ToolStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
