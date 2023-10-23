import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[],filtertext:string): Product[]  {
    filtertext=filtertext?.toLocaleLowerCase();""
    return filtertext? value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filtertext)!==-1):value
  }

}
