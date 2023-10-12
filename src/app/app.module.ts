import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ItemProductComponent } from './component/item-product/item-product.component';
import { SliceItemProductComponent } from './component/slice-item-product/slice-item-product.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SlideComponent } from './pages/home/component/slide/slide.component';
import { ListNewProductComponent } from './pages/home/component/list-new-product/list-new-product.component';
import { ListHotProductComponent } from './pages/home/component/list-hot-product/list-hot-product.component';
import { ListTopProductComponent } from './pages/home/component/list-top-product/list-top-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './layout/client/client.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EndBannerComponent } from './pages/home/component/end-banner/end-banner.component';
import { QuantityButtonComponent } from './component/quantity-button/quantity-button.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ItemProductComponent,
    SliceItemProductComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    ListNewProductComponent,
    ListHotProductComponent,
    ListTopProductComponent,
    ClientComponent,
    EndBannerComponent,
    QuantityButtonComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
