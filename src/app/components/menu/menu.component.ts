import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorOption } from 'src/app/models/color-option.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() options: Array<ColorOption> | any
  @Output() themeChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  changeTheme(themeToSet:any) {
    this.themeChange.emit(themeToSet);
  }
}
