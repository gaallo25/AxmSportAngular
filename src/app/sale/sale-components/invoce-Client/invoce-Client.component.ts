// invoce-Client.component.ts
import { Component, Input, OnInit } from '@angular/core';

import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-invoce-client',
  templateUrl: './invoce-Client.component.html',
})
export class InvoiceClientComponent implements OnInit {
  @Input() showClientDetails: boolean = false;
  @Input() cliente: ClienteModel | null = null;


 

  constructor() {
      }

  ngOnInit(): void {
  }
}
