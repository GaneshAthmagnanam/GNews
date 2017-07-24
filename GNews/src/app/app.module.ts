import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PoliticsPage } from '../pages/politics/politics';
import { IndiaPage } from '../pages/india/india';
import { WorldPage } from '../pages/world/world';
import { MoviesPage } from '../pages/movies/movies';

import { CricNewsProvider } from '../providers/cric-news/cric-news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PoliticsPage,
    IndiaPage,
    MoviesPage,
    WorldPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PoliticsPage,
    IndiaPage,
    MoviesPage,
    WorldPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CricNewsProvider
  ]
})
export class AppModule {}
