import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVehiculo } from './registro-vehiculo';

describe('RegistroVehiculo', () => {
  let component: RegistroVehiculo;
  let fixture: ComponentFixture<RegistroVehiculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVehiculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVehiculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
