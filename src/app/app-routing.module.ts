import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../app/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'student-sign-up',
    loadChildren: () => import('./student-sign-up/student-sign-up.module').then( m => m.StudentSignUpPageModule)
  },
 
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'new-student-sign-up',
    loadChildren: () => import('./new-student-sign-up/new-student-sign-up.module').then( m => m.NewStudentSignUpPageModule)
  },
  {
    path: 'student-home',
    loadChildren: () => import('./student-home/student-home.module').then( m => m.StudentHomePageModule)
  },
  {
    path: 'new-student-home',
    loadChildren: () => import('./new-student-home/new-student-home.module').then( m => m.NewStudentHomePageModule)
  },
  {
    path: 'sujets-test',
    loadChildren: () => import('./sujets-test/sujets-test.module').then( m => m.SujetsTestPageModule)
  },
  {
    path: 'infos-ibam',
    loadChildren: () => import('./infos-ibam/infos-ibam.module').then( m => m.InfosIbamPageModule)
  },
  {
    path: 'options-pay',
    loadChildren: () => import('./options-pay/options-pay.module').then( m => m.OptionsPayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
