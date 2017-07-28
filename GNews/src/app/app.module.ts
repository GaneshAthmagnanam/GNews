import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
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
import { AboutContentPage } from '../pages/about-content/about-content';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CricNewsProvider } from '../providers/cric-news/cric-news';
import { TextToSpeech } from '@ionic-native/text-to-speech';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PoliticsPage,
    IndiaPage,
    MoviesPage,
    WorldPage,
    AboutContentPage
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
    WorldPage,
    AboutContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SocialSharing,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CricNewsProvider
  ]
})
export class AppModule {}
