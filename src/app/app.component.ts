import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {AuthenticationProvider} from '../providers/authentication/authentication';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = HomePage;

  pages: Array<{title:string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public authenticationProvider:AuthenticationProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logout(){
    this.authenticationProvider.logout();
    this.nav.setRoot(LoginPage);
  }
}

