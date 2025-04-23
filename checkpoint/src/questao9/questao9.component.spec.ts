import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao9Component } from './questao9.component';

describe('Questao9Component', () => {
  let component: Questao9Component;
  let fixture: ComponentFixture<Questao9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questao9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Questao9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
