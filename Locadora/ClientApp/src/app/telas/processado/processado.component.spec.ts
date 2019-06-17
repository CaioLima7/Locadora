import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessadoComponent } from './processado.component';

describe('ProcessadoComponent', () => {
  let component: ProcessadoComponent;
  let fixture: ComponentFixture<ProcessadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
