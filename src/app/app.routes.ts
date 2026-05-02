import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'' , loadComponent: () => import('./landing-view/landing-view.component').then(c => c.LandingViewComponent) },
    {path:'experiencePage' , loadComponent: () => import('./experience-page/experience-page.component').then(c => c.ExperiencePageComponent) },
    {path:'therapeuticAreaExpertise' , loadComponent: () => import('./therapeutic-area-expertise/therapeutic-area-expertise.component').then(c => c.TherapeuticAreaExpertiseComponent) }
];
