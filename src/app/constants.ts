import { InjectionToken } from '@angular/core';

export const DYNAMIC_COMPONENT_DATA = new InjectionToken<any>('DynamicComponentData');

export enum ComponentType {
    header = 'header',
    body = 'body',
    footer = 'footer'
}
