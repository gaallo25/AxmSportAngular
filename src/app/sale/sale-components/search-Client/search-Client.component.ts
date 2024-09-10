// search-Client.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { topcard, topcards } from './search-Client-data';

import { ClienteModel } from 'src/app/models/cliente.model';
import { UsuarioServiceService } from 'src/app/services/Usuario/usuario-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'search-Client',
  templateUrl: './search-Client.component.html',
})
export class SearchClientComponent {
  topcards: topcard[];
  documentNumber: string = '';
  showClientDetails: boolean = false; // Flag para mostrar los detalles del cliente
  cliente!:ClienteModel;
  @Output() clientDetailsChanged = new EventEmitter<boolean>();
  @Output() ClienteExists = new EventEmitter<ClienteModel>();
  constructor(private http: HttpClient, private router: Router, private usuarioService: UsuarioServiceService) {
    this.topcards = topcards;
  }

  onSubmit() {
   if (this.documentNumber) {
    Swal.fire({
      title: 'Cargando...',
      text: 'Buscando datos del cliente',
      allowOutsideClick: false,  // Evita que se cierre al hacer clic fuera
      didOpen: () => {
        Swal.showLoading();  // Muestra el icono de cargando
      }
    });

    this.usuarioService.getClient(this.documentNumber).subscribe({
      next: (cliente: ClienteModel) => {
        if(cliente !=null)
        {
          this.cliente = cliente;
          console.log("cliente recibido", cliente)
          this.ClienteExists.emit(cliente); 
          this.showClientDetails = true;
          this.clientDetailsChanged.emit(this.showClientDetails);
          Swal.close();
          Swal.fire({
            icon: 'success',
            title: 'Cliente encontrado',
            text: 'Se han cargado los datos del cliente.'
          });
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Cliente no registrado'
          });
        }
      },

      error: (error) => {
        // Cuando ocurre un error, como 404
        if (error.status === 404) {
          console.log("Usuario no existe.");
        } else {
          console.error("Error al buscar usuario:", error);
        }
      },
      complete: () => {
        console.log("Solicitud completada.");
      }
    });
}

    
}

}