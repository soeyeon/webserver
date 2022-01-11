import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {
  FlashMessagesModule,
  FlashMessagesService,
} from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { ValidateService } from './services/validate.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  HttpClientModule, FormsModule, FlashMessagesModule,JwtModule.forRoot({
    config: {
      tokenGetter: () => localStorage.getItem('authToken'),
    },
  }),
  ],
  providers: [ValidateService, FlashMessagesService, { provide: RouteReuseStrategy,  useClass: IonicRouteStrategy,   }],
  bootstrap: [AppComponent],
})
export class AppModule {}
