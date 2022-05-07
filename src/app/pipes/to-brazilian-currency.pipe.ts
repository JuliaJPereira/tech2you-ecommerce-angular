import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBrazilianCurrency'
})
export class ToBrazilianCurrencyPipe implements PipeTransform {

  transform(value?: number): unknown {
    if(!value){
      return "";
    }
    var valorFormatado = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return valorFormatado;
  }

}
