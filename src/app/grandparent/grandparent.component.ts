import { Component } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss']
})
export class GrandparentComponent {

  onButtonClick(): void {
    console.log('Button click event emitted!');
  }

}