import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { WebglComponent } from './webgl/webgl.component';
import { NotificationComponent } from './notification/notification.component';
import { AudioComponent } from './audio/audio.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'experiments',
    component: ExperimentsComponent
  },
  {
    path: 'webgl',
    component: WebglComponent
  },
  {
    path: 'notifications',
    component: NotificationComponent
  },
  {
    path: 'audio',
    component: AudioComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperimentsComponent,
    NavigationComponent,
    HomeComponent,
    WebglComponent,
    NotificationComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
