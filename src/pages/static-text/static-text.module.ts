import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaticTextPage } from './static-text';

@NgModule({
  declarations: [
    StaticTextPage,
  ],
  imports: [
    IonicPageModule.forChild(StaticTextPage),
  ],
})
export class StaticTextPageModule {}
