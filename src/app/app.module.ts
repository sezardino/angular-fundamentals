import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsBindingComponent } from './forms-binding/forms-binding.component';
import { FormsModule } from '@angular/forms';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingsComponent,
    FormsBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
