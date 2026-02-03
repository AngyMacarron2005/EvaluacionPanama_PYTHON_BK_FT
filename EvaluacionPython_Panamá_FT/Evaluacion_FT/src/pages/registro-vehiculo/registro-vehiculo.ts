import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { GestionVehiculos } from '../../gestion-vehiculos';

@Component({
  selector: 'app-registro-vehiculo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-vehiculo.html',
  styleUrl: './registro-vehiculo.css',
})
export class RegistroVehiculo {

  form: FormGroup;
  mensaje = '';

  constructor(
  private fb: FormBuilder,
  private gpService: GestionVehiculos
) {
  this.form = this.fb.group({
    placa: [''],   
    marca: [''],
    modelo: [''],
    anio: [''],
    propietario: [''],    
    nombre: [''],
    direccion: ['']
  });
}
  guardar() {
  console.log('Datos enviados:', this.form.value);

  this.gpService.create(this.form.value).subscribe({
    next: () => {
      this.mensaje = 'Vehiculo registrado con éxito';
      this.form.reset();
    },
    error: (err) => {
      console.error('Error backend:', err);
      this.mensaje = 'Error al registrar vehiculo';
    }
  });
}

}