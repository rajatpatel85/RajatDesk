import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './rajat-desk-header/app-header.component';
import { RajatAuthorComponent } from './rajat-author/rajat-author.component';
import { AppHomeBodyComponent } from './app-home-body/app-home-body.component';
import { AppAdsHeaderComponent } from './app-ads-header/app-ads-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JavaComponent } from './java/java.component';
import { SpringComponent } from './spring/spring.component';
import { ArticleFormComponent } from './article-form/article-form.component';

const appRoutes: Routes = [
  { path: 'article', component: ArticleFormComponent },
  { path: 'java', component: JavaComponent },
  { path: 'spring',component: SpringComponent },
  { path: 'home',component: AppHomeBodyComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RajatAuthorComponent,
    AppHomeBodyComponent,
    AppAdsHeaderComponent,
    PageNotFoundComponent,
    JavaComponent,
    SpringComponent,
    ArticleFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
