import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from '../models/dynamic-component.model';
import { DYNAMIC_COMPONENT_DATA, ComponentType } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements DynamicComponent, OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) public data) {}

  ngOnInit() {
  }

  getComponentType(): ComponentType {
    return ComponentType.footer;
  }
}
