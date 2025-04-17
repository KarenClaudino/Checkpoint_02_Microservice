import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao8Component } from './questao8.component';

describe('Questao8Component', () => {
  let component: Questao8Component;
  let fixture: ComponentFixture<Questao8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questao8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Questao8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
