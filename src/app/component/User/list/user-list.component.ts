import { Component } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/clientes/cliente.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  allClients: ClienteModel[] = [];
  constructor(private clienteService : ClienteService) {}

  ngOnInit(): void {
    this.clienteService.searchClients().subscribe({
      next: (response: any) => {
        if (response.data && Array.isArray(response.data)) {
          this.allClients = response.data;
        }
      },
      error: (error) => {
        console.error('Error al buscar productos:', error);
        
      }
    });
  }
}
