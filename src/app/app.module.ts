import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';

import { LayoutModule } from '@angular/cdk/layout';

// ng Material
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDividerModule,
  MatDatepickerModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE
} from '@angular/material';



import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { DishTableComponent } from './dish-table/dish-table.component';

import { QuickLunchService } from './service/quick-lunch.service';
import { MyDashComponent } from './my-dash/my-dash.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    DishTableComponent,
    MyDashComponent,
    ScheduleComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    QuickLunchService,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
