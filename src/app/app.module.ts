import { NgChartsModule } from 'ng2-charts';
import { HttpInterceptorInterceptor } from './services/interceptors/http-interceptor.interceptor';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { StatsInfoComponent } from './components/stats-info/stats-info.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegisterConfirmationComponent } from './pages/register-confirmation/register-confirmation.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UserDashboardComponent,
    StatsInfoComponent,
    TransactionsComponent,
    ContactListComponent,
    NewTransactionComponent,
    NewContactComponent,
    SidebarComponent,
    ProfilComponent,
    ManageUsersComponent,
    MainPageComponent,
    MainAdminPageComponent,
    AdminDashboardComponent,
    RegisterConfirmationComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    },
    HttpClient,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
