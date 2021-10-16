import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoageTwoComponent } from './poage-two.component';

describe('PoageTwoComponent', () => {
  let component: PoageTwoComponent;
  let fixture: ComponentFixture<PoageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
