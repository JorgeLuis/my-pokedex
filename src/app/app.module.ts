import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import 'hammerjs';
import { POKE_ROUTING } from './routing.module';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';


import { PokemonesService } from './services/pokemones.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { AppHightlightDirective } from './app-hightlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonesComponent,
    PokemonInfoComponent,
    CapitalizePipe,
    PokemonSearchComponent,
    AppHightlightDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    POKE_ROUTING, HttpModule, FormsModule,
    MatIconModule, MatToolbarModule, MatSidenavModule, MatButtonModule,
    MatListModule, MatCardModule, MatInputModule
  ],
  providers: [PokemonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
