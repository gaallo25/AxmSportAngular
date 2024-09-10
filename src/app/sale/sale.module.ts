// sale.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { saleComponent } from './sale.component';
import { SalesRatioComponent } from './sale-components/sales-ratio/sales-ratio.component';
import { FeedsComponent } from './sale-components/feeds/feeds.component';
import { SearchClientComponent } from './sale-components/search-Client/search-Client.component';
import { InvoiceClientComponent } from './sale-components/invoce-Client/invoce-Client.component';
import { BlogCardsComponent } from './sale-components/blog-cards/blog-cards.component';

import { SearchProductComponent } from './sale-components/Search-Product/search-Product.component';
import { ComponentsModule } from '../component/component.module';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'sale',
      urls: [{ title: 'sale', url: '/sale' }, { title: 'sale' }],
    },
    component: saleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule, // Asegúrate de incluir CommonModule
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    ComponentsModule
  ],
  declarations: [
    saleComponent,
    SalesRatioComponent,
    FeedsComponent,
    SearchClientComponent,
    InvoiceClientComponent,
    BlogCardsComponent,
    SearchProductComponent,
  ],
  exports: [InvoiceClientComponent],
})
export class saleModule {}
