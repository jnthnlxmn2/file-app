import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { Ng2Webstorage } from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilesComponent } from './pages/files/files.component';
import { AddFileComponent } from './pages/add-file/add-file.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ProgressBarComponent } from './pages/ui/progress-bar/progress-bar.component';
import { PagesComponent } from './pages/pages.component';
import { FileCategoryComponent } from './pages/file-category/file-category.component';
import { UsersComponent } from './pages/users/users.component';
import { ModalModule } from 'ngx-modal';
import { RegisterComponent } from './pages/register/register.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FilesComponent,
    AddFileComponent,
    PagesComponent,
    FileCategoryComponent,
    UsersComponent,
    RegisterComponent,
    ChangePasswordComponent,
    SearchpipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpModule,
    HttpClientModule,
    Ng2Webstorage,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    ModalModule,
    FileUploadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
