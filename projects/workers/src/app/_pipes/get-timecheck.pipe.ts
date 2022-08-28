import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTimecheck'
})
export class GetTimecheckPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    const _time = new Date(value);
    const _hour = _time.getHours() + ':' + _time.getMinutes().toString().padStart(2, "0");
    
    return _hour;
  }

}
