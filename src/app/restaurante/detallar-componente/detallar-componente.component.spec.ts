import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallarComponenteComponent } from './detallar-componente.component';

describe('DetallarComponenteComponent', () => {
  let component: DetallarComponenteComponent;
  let fixture: ComponentFixture<DetallarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallarComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
