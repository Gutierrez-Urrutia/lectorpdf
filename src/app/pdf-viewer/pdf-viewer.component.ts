import { Component, AfterViewInit, ElementRef } from '@angular/core';
import * as Hammer from 'hammerjs';
declare var $: any;

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  standalone: true
})
export class PdfViewerComponent  implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    $('#flipbook').turn({
      width: 800,
      height: 600,
      autoCenter: true,
      elevation: 50,
      gradients: true,
      duration: 1000
    });

    const flipbookElement = this.elRef.nativeElement.querySelector('#flipbook');
    const hammer = new Hammer(flipbookElement);

    hammer.on('swipeleft', () => {
      this.nextPage();
    });

    hammer.on('swiperight', () => {
      this.previousPage();
    });
  }

  
  previousPage() {
    $('#flipbook').turn('previous');
  }

  nextPage() {
    $('#flipbook').turn('next');
  }

}
