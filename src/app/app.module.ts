import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IconModule } from '@visurel/iconify-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './pages/food/food.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { CartComponent } from './pages/cart/cart.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodComponent,
    FoodCardComponent,
    CartComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 6000, progressBar: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
