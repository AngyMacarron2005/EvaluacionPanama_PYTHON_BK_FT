
export interface Vehiculo {
  placa?: string;
  marca: string;
  modelo: string;
  anio: number;
  propietario: string;
}  
export interface RegistroVehiculo {
  vehiculo: Vehiculo;
  fechaRegistro: Date;
}
export interface Error {
  codigo: number;
  name: string;
  description: string;
}