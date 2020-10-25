import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionServicioUsuarioComponent } from './gestion-servicio-usuario.component';

describe('GestionServicioUsuarioComponent', () => {
  let component: GestionServicioUsuarioComponent;
  let fixture: ComponentFixture<GestionServicioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionServicioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionServicioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
