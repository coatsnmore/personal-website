import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { WebglComponent } from './webgl/webgl.component';
import { NotificationComponent } from './notification/notification.component';
import { AudioComponent } from './audio/audio.component';
import { MapComponent } from './map/map.component';

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
    path: 'map',
    component: MapComponent
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
    AudioComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoCoDi_hdFHUK1wERvz3dqlZ5JaOrElfI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
