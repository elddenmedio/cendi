import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalsLoop'
})
export class TotalsLoopPipe implements PipeTransform {

  transform(calculateValues: any, step: number, position: number): number {
    let _return: number[] = [];
    calculateValues.forEach((el: any) => {
      if (el.step == step) {
        el.value.forEach((element: any) => {
          if (element.position == position && element.object.formControl.includes('kpi')) {
            _return.push(1);
          }
        });
      }
    });
    // return _return.reduce((partialSum, a) => partialSum + a, 0);
    return _return.length;
  }
}
