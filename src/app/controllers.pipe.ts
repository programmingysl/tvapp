import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controllers'
})
export class ControllersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
