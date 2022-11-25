import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalsLoopByStep'
})
export class TotalsLoopByStepPipe implements PipeTransform {

  transform(calculateValues: any, step: number): number[] {
    let _return: number[] = [];
    calculateValues.forEach((el: any) => {
      if (el.step == step) {
        el.value.forEach((element: any) => {
          if (_return.indexOf(element.position) == -1) {
            _return.push(element.position);
          }
        });
      }
    });
    return _return;
  }

}
