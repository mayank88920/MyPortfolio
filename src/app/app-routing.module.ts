import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path:'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path:'intro',
    component: IntroComponent,
    pathMatch: 'full',
  },
  {
    path:'cv',
    component: CvComponent,
    pathMatch: 'full',
  },
  {
    path:'projects',
    component: ProjectsComponent,
    pathMatch: 'full',
  },
  {
    path:'contact',
    component: ContactComponent,
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
