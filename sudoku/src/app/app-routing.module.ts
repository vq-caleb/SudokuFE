import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{path: "", redirectTo: '/login', pathMatch: 'full'},
	{path: "login", loadChildren: 'app/login/login.module#LoginModule'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }