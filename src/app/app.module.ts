import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ParentComponent } from './parent/parent.component';
import { GrandparentComponent } from './grandparent/grandparent.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ButtonComponent, ParentComponent, GrandparentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
