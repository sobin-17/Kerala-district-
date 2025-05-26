import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DistrictComponent } from './district/district.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { AppDevelopmentComponent } from './pages/app-development/app-development.component';
import { AiAutomationComponent } from './pages/ai-automation/ai-automation.component';
import { CloudSolutionsComponent } from './pages/cloud-solutions/cloud-solutions.component';
import { CybersecurityComponent } from './pages/cybersecurity/cybersecurity.component';

export const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'about',component:AboutPageComponent},
    {path:'district',component:DistrictComponent},
    {path:'district/:id',component:DetailPageComponent},
    {path:'web-development',component:WebDevelopmentComponent},
    {path:'app-development',component:AppDevelopmentComponent},
    {path:'ai-automation',component:AiAutomationComponent},
    {path:'cloud-solutions',component:CloudSolutionsComponent},
    {path:'cybersecurity',component:CybersecurityComponent}
];
