import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropellerButtonComponent } from './propeller-button.component';

describe('PropellerButtonComponent', () => {
  let component: PropellerButtonComponent;
  let fixture: ComponentFixture<PropellerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropellerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropellerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
