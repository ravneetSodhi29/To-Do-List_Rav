import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [SplashScreenComponent, HeaderComponent],
    imports: [CommonModule, MatToolbarModule, MatIconModule],
    exports: [SplashScreenComponent, HeaderComponent]
})
export class CoreModule { }
