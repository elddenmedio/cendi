import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalsPercent'
})
export class TotalsPercentPipe implements PipeTransform {

  transform(sum: number, selectOptions: any): number {
    const _aciertos = selectOptions.find((el: any) => (el.type == 'aciertos')).value;
    return Math.round((sum * 100) / _aciertos.value);
  }

}
