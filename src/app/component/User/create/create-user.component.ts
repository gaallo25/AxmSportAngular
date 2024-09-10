import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from 'src/app/models/cliente.model';
import { UsuarioServiceService } from 'src/app/services/Usuario/usuario-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  switchValue: boolean = false;
  cliente : ClienteModel = new ClienteModel();

  constructor(private http: HttpClient, private usuarioService: UsuarioServiceService) {}

  onSubmit() {
    this.cliente.Creado =new Date();
    this.cliente.Estado = 1;
    Swal.fire({
      title: 'Cargando...',
      text: 'Creando cliente',
      allowOutsideClick: false,  // Evita que se cierre al hacer clic fuera
      didOpen: () => {
        Swal.showLoading();  // Muestra el icono de cargando
      }
    });

  
    this.usuarioService.saveClient(this.cliente).subscribe(
      (response) => {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Cliente registrado'
        });
       
        // Aquí puedes manejar la respuesta, por ejemplo, mostrar una notificación
      },
      (error) => {
        console.error('Error al guardar el cliente:', error);
      }
    );
  console.log(this.cliente)
  }
}
