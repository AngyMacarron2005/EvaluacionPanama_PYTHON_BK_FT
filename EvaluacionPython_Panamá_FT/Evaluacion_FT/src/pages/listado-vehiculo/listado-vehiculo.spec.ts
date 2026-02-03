import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVehiculo } from './listado-vehiculo';

describe('ListadoVehiculo', () => {
  let component: ListadoVehiculo;
  let fixture: ComponentFixture<ListadoVehiculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoVehiculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoVehiculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
