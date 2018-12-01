import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideshowModule } from '../../node_modules/ng-simple-slideshow';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { SlideshowComponent } from 'ng-simple-slideshow/src/app/modules/slideshow/slideshow.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    FooterComponent,
    NewsComponent,
    MenuComponent,
    FloatingActionButtonComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
