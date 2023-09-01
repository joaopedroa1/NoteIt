import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaCriacaoComponent } from './confirma-criacao.component';

describe('ConfirmaCriacaoComponent', () => {
  let component: ConfirmaCriacaoComponent;
  let fixture: ComponentFixture<ConfirmaCriacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmaCriacaoComponent]
    });
    fixture = TestBed.createComponent(ConfirmaCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
