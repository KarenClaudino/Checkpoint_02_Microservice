import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao10Component } from './questao10.component';

describe('Questao10Component', () => {
  let component: Questao10Component;
  let fixture: ComponentFixture<Questao10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questao10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Questao10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
