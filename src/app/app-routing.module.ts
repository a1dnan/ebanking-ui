import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { AdminGuardGuard } from './services/guards/admin-guard.guard';
import { TokenGuardGuard } from './services/guards/token-guard.guard';
import { RegisterConfirmationComponent } from './pages/register-confirmation/register-confirmation.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'register-confirmation', component: RegisterConfirmationComponent
  },
  {
    path: 'access-denied', component: AccessDeniedComponent
  },
  {
    path: 'user',
    component: MainPageComponent,
    canActivate: [TokenGuardGuard],
    children: [
      {
        path: 'dashboard', component: UserDashboardComponent
      },
      {
        path: 'transactions', component: TransactionsComponent
      },
      {
        path: 'contacts', component: ContactListComponent
      },
      {
        path: 'new-transaction', component: NewTransactionComponent
      },
      {
        path: 'new-contact', component: NewContactComponent
      },
      {
        path: 'new-contact/:idContact', component: NewContactComponent
      },
      {
        path: 'profil', component: ProfilComponent
      }
      ,
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    component: MainAdminPageComponent,
    canActivate: [TokenGuardGuard, AdminGuardGuard],
    children: [
      {
        path: 'customers',
        component: ManageUsersComponent
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'profil', component: ProfilComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
