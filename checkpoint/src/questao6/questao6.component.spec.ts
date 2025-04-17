import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao6Component } from './questao6.component';

describe('Questao6Component', () => {
  let component: Questao6Component;
  let fixture: ComponentFixture<Questao6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questao6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Questao6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
