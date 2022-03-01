import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import {PrimeModule} from './prime/prime.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ColorPickerModule} from 'primeng/colorpicker';
import {AccordionModule} from 'primeng/accordion';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {CategoryService} from 'src/app/shared/category.service';
import { CategoryFormComponent } from './pages/category-form/category-form.component'
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService,MessageService} from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    SidebarComponent,
    DashboardComponent,
    CategoriesComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    PrimeModule,ButtonModule,ColorPickerModule,AccordionModule,TableModule,
    CardModule,ToolbarModule,InputTextModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule


  ],
  providers: [CategoryService,MessageService, ConfirmationService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
