import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TextComponent } from './components/text/text.component';
import { FilterPipe } from './filter.pipe';
import { ContainerViewWeatherComponent } from './components/container-view-weather/container-view-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { MensagemErrorComponent } from './components/messagem-error/mensagem-error.components';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextComponent,
    FilterPipe,
    ContainerViewWeatherComponent,
    LoadingPageComponent,
    MensagemErrorComponent,
    FooterComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
