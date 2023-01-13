import { Component, Input } from '@angular/core';
import boxIcon from '@iconify-icons/fluent/box-24-regular';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
})
export class EmptyComponent {
  boxIcon = boxIcon;

  @Input() message?: string = 'Nothing to see here';
}
