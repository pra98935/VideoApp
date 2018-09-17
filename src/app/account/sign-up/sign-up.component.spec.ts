import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIgnUpComponent } from './sign-up.component';

describe('SIgnUpComponent', () => {
  let component: SIgnUpComponent;
  let fixture: ComponentFixture<SIgnUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIgnUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIgnUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
