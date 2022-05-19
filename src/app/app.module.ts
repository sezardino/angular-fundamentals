import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsBindingComponent } from './forms-binding/forms-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingsComponent,
    FormsBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
