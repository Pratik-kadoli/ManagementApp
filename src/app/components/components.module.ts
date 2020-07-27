import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import{IonicModule} from '@ionic/angular';
import{CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';




@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SlidesComponent,StartComponent,LogoComponent],
  exports:[SlidesComponent,StartComponent,LogoComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
