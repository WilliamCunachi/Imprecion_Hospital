import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Pasiente, Pasientes } from '../../services/pasiente';
import { FormsModule } from '@angular/forms';

declare const bootstrap: any;


@Component({
  selector: 'app-pasiente-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pasiente-list.html',
  styleUrls: ['./pasiente-list.css']
})
export class PasienteList implements OnInit {
  pasientes: Pasientes[] = [];
  pacienteSeleccionado: Pasientes = {} as Pasientes;
  modalEditarInstance: any;

  constructor(private pasienteService: Pasiente) {}

  ngOnInit(): void {
    this.cargarPacientes();
  }

 
  cargarPacientes() {
    this.pasienteService.getPasientes().subscribe(data => this.pasientes = data);
  }


abrirModalEditar(paciente: Pasientes) {
  this.pacienteSeleccionado = { ...paciente };
  const modalEl = document.getElementById('modalEditar');
  if (modalEl) {
    this.modalEditarInstance = new bootstrap.Modal(modalEl);
    this.modalEditarInstance.show();
  }
}

  cerrarModal() {
    this.modalEditarInstance.hide();
  }

  guardarEdicion() {
  this.pasienteService.updatePasiente(this.pacienteSeleccionado.id, this.pacienteSeleccionado)
    .subscribe(() => {
      this.cargarPacientes(); 
      this.modalEditarInstance.hide();
    });
}

  eliminarPaciente(id: number) {
    if (confirm('¿Seguro que deseas eliminar este paciente?')) {
      this.pasienteService.deletePasiente(id).subscribe(() => this.cargarPacientes());
    }
  }

  imprimir(): void {
  window.print();
}

}
