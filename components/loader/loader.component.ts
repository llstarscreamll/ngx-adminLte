import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div [ngClass]="[loader, 'loader-container']">
      <div *ngFor="let div of divs"></div>
    </div>
    <div class="clearfix"></div>
    <div class="text-center"><ng-content></ng-content></div>
  `,
  styleUrls: [
    'app-loader.component.css'
  ]
})

export class LoaderComponent implements OnInit {
  @Input()
  public loader: string = 'ball-grid-pulse';

  constructor() { }

  ngOnInit() { }

  get divs() {
    let divs = 1;

    switch (this.loader) {
      case 'ball-clip-rotate':
      case 'square-spin':
      case 'ball-rotate':
      case 'ball-scale':
      case 'ball-scale-ripple':
      case 'triangle-skew-spin':
      case 'semi-circle-spin':
        divs = 1;
      break;

      case 'cube-transition':
      case 'ball-zig-zag':
      case 'ball-clip-rotate-pulse':
      case 'ball-zig-zag-deflect':
      case 'ball-clip-rotate-multiple':
        divs = 2;
      break;

      case 'ball-triangle-path':
      case 'ball-pulse':
      case 'ball-scale-ripple-multiple':
      case 'ball-scale-multiple':
      case 'ball-pulse-sync':
      case 'ball-beat':
        divs = 3;
      break;

      case 'line-scale-party':
        divs = 4;
      break;

      case 'ball-pulse-rise':
      case 'line-scale':
      case 'line-scale-pulse-out':
      case 'pacman':
      case 'line-scale-pulse-out-rapid':
        divs = 5;
      break;


      case 'ball-spin-fade-loader':
      case 'line-spin-fade-loader':
        divs = 8;
      break;

      case'ball-grid-beat':
      case'ball-grid-pulse':
      default:
        divs = 9;
      break;
    }

    return Array(divs).fill('div');
  }
}