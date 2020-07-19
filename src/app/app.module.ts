import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import {MatCard, MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FindIpComponent } from './find-ip/find-ip.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    MenuBarComponent,
    FindIpComponent,
    JsonFormatterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
