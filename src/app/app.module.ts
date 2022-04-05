import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { RichTextEditorModule, ToolbarService ,LinkService,ImageService,HtmlEditorService} from '@syncfusion/ej2-angular-richtexteditor'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    RichTextEditorModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
   
    
  ],
  providers: [ToolbarService ,LinkService,ImageService,HtmlEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
