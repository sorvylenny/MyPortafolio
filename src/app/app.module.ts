import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './Profile/portafolio/portafolio.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Profile/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
