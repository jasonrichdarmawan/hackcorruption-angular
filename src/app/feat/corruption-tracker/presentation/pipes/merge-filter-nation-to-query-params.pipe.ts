import { Pipe, PipeTransform } from '@angular/core';
import { FilterNation, FilterNationValue } from '../components/c-t-filter-nation/c-t-filter-nation.component';
import { Params } from '@angular/router';

@Pipe({
  name: 'mergeFilterNationToQueryParams',
  standalone: true
})
export class MergeFilterNationToQueryParamsPipe implements PipeTransform {

  transform(filters: FilterNation[], value: FilterNationValue, checked: boolean, currentQueryParams: Params): Params {    
    let nationParam = filters.flatMap(filter => {
      if (!filter.checked) { return []; }
      return filter.value;
    });

    if (checked) {
      nationParam = nationParam.filter(item => item !== value);
    } else {
      nationParam.push(value);
    }

    const queryParams = {
      ...currentQueryParams,
      nation: nationParam,
    };
    
    return queryParams;
  }

}
