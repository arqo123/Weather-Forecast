import { LocationSelectModule } from './location-select/location-select.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ForecastModule } from './forecast/forecast.module';
import { UtilsService } from './services/utils-service';
import { ErrorHandlerService } from './services/error-handler-service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    LocationSelectModule,
    ForecastModule,
    FlexLayoutModule,
    MatSnackBarModule,
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [UtilsService,ErrorHandlerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
