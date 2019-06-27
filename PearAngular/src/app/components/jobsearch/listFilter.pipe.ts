import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'startsWith'})
export class StartsWithPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter){
      return items;
    }
    return items.filter((x:any) => x.project.toLowerCase().startsWith(filter.toLowerCase())
      || x.charity.toLowerCase().startsWith(filter.toLowerCase()))

  }
}
