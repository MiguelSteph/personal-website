import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LoginComponent } from './features/login/login.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { FooterComponent } from './core/footer/footer.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { HomeComponent } from './features/home/home.component';
import { PortfoliosComponent } from './features/portfolios/portfolios.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { BlogPreviewComponentComponent } from './features/blogs/blog-preview-component/blog-preview-component.component';
import { PortfolioProjectPreviewComponent } from './features/portfolios/portfolio-project-preview/portfolio-project-preview.component';
import { PortfolioProjectViewComponent } from './features/portfolios/portfolio-project-view/portfolio-project-view.component';
import { BlogComponent } from './features/blogs/blog/blog.component';
import { ContactMeComponent } from './features/contact-me/contact-me.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireAnalyticsModule, ScreenTrackingService, UserTrackingService} from "@angular/fire/analytics";
import {PersonalInfoService} from "./core/services/personal-info.service";

export function initializeAppWithProfileInformation(personalInfoService: PersonalInfoService) {
  return () => personalInfoService.getMyInformation();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    LoginComponent,
    FooterComponent,
    BlogsComponent,
    HomeComponent,
    PortfoliosComponent,
    PageNotFoundComponent,
    BlogPreviewComponentComponent,
    PortfolioProjectPreviewComponent,
    PortfolioProjectViewComponent,
    BlogComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    PersonalInfoService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppWithProfileInformation,
      deps: [PersonalInfoService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
