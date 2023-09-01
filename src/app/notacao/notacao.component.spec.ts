import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotacaoComponent } from './notacao.component';

describe('NotacaoComponent', () => {
  let component: NotacaoComponent;
  let fixture: ComponentFixture<NotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotacaoComponent]
    });
    fixture = TestBed.createComponent(NotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
