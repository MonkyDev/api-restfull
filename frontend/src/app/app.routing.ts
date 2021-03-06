import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
	{path:'', 				component: LoginComponent},
	{path:'login',		component: LoginComponent},
	{path:'registro', component: RegisterComponent},
	{path:'**', 			component: LoginComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

