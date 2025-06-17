import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return '';
    }

    else{
      // const nonDigitValue=value.replace(/\D/g,'')
      const parts =[];
      for(let i=0; i<value.length&&i<16 ; i+=4){
        parts.push(value.substring(i,i+4))
      }

      return parts.join(' _ ')
    }

  
   
  }

}
