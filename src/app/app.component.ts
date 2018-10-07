import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class foodIonicApp {
    @ViewChild(Nav) nav: Nav;

  	tabsPlacement: string = 'bottom';
  	tabsLayout: string = 'icon-top';

    rootPage: any = 'page-walkthrough';
    showMenu: boolean = true;

    homeItem: any;

    initialItem: any;

    messagesItem: any;

    settingsItem: any;

    appMenuItems: Array<MenuItem>;

    yourRestaurantMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.homeItem = { component: 'page-home' };
        this.messagesItem = { component: 'page-message-list'};


        this.appMenuItems = [
            {title: 'Restaurantes', component: 'page-restaurant-list', icon: 'home'},
            {title: 'Lista de platos', component: 'page-dish-list', icon: 'pizza'},
            {title: 'Cercanos', component: 'page-nearby', icon: 'compass'},
            {title: 'Por categorías', component: 'page-category', icon: 'albums'},
            {title: 'Últimos pedidos', component: 'page-orders', icon: 'list-box'},
            {title: 'Carrito', component: 'page-cart', icon: 'cart'},
			{title: 'Restaurante favorito', component: 'page-favorite-list', icon: 'heart'},
			{title: 'Plato favorito', component: 'page-favorite-dish', icon: 'heart'}
        ];

        this.yourRestaurantMenuItems = [
            {title: 'Registrar restaurante', component: 'page-your-restaurant', icon: 'clipboard'}
        ];


        this.accountMenuItems = [
            {title: 'Login', component: 'page-auth', icon: 'log-in'},
            {title: 'Mi cuenta', component: 'page-my-account', icon: 'contact'},
            {title: 'Salir', component: 'page-auth', icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Info', component: 'page-about', icon: 'information-circle'},
            {title: 'Soporte', component: 'page-support', icon: 'call'},
            {title: 'Configuración', component: 'page-settings', icon: 'cog'},

        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.splashScreen.hide();
        });

	    if (!this.platform.is('mobile')) {
	      this.tabsPlacement = 'top';
	      this.tabsLayout = 'icon-left';
	    }
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
