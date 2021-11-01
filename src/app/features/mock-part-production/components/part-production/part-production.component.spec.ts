import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartProductionComponent } from './part-production.component';

describe('PartProductionComponent', () => {
  let component: PartProductionComponent;
  let fixture: ComponentFixture<PartProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
