import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao7Component } from './questao7.component';

describe('Questao7Component', () => {
  let component: Questao7Component;
  let fixture: ComponentFixture<Questao7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questao7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Questao7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
