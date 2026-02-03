import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionVehiculos } from '../../gestion-vehiculos';
import { Vehiculo } from './/../../domain/models';

@Component({
  selector: 'app-listado-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-vehiculo.html',
  styleUrl: './listado-vehiculo.css'
})
export class ListadoVehiculo implements OnInit {

  vehiculos: Vehiculo[] = [];

  constructor(private gpService: GestionVehiculos) {}
  
  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
  this.gpService.getAll().subscribe({
    next: (data) => {
      console.log('DATOS DEL BACKEND ', data);
      this.vehiculos = data;
    },
    error: (err) => {
      console.error('ERROR HTTP ', err);
    }
  });
  }
}
