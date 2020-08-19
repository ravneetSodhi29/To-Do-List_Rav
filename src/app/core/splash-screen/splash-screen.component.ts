import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { PwaService } from '../../shared/pwa.service';
import { trigger, transition, query, animateChild, animate, style } from '@angular/animations';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    animations: [
        // the fade-in/fade-out animation.
        trigger('fadeOut', [
            transition(':leave', [
                query(':leave', animateChild(), { optional: true }),
                animate(300, style({ opacity: 0 }))
            ]),
        ]),
    ],
    styleUrls: ['./splash-screen.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashScreenComponent implements OnInit {
    showSplashImage = true;

    constructor(
        private pwaService: PwaService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.pwaService.checkForUpdate()
            .subscribe(result => {
                this.showSplashImage = result;
                this.cdr.detectChanges();
            });
    }
}
