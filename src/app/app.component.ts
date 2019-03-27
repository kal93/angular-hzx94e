import { Component, OnInit } from '@angular/core';
import { ComponentType } from './constants';
import { DynamicComponentData } from './models/dynamic-component-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'DynamicLoading';
  selected: DynamicComponentData = null;

  ngOnInit(): void {
    this.selected = this.getMock(ComponentType.header);
  }

  loadByString(type: ComponentType) {
    this.selected = this.getMock(type);
  }

  getMock(type: ComponentType): DynamicComponentData {
    switch (type) {
      case ComponentType.header:
        return {
          meta: {
            type: ComponentType.header
          },
          data: {
            text: 'this is some header text'
          }
        };
      case ComponentType.body:
        return {
          meta: {
            type: ComponentType.body
          },
          data: {
            text: 'this is some body text',
            subText: 'this is some sub-text'
          }
        };
      case ComponentType.footer:
        return {
          meta: {
            type: ComponentType.footer
          },
          data: {
            text: 'This is some footer text',
          }
        };
    }
  }
}
