import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeContentComponent } from './home-content/home-content.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
