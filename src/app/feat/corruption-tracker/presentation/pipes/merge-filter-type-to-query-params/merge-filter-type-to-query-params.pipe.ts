import { Pipe, PipeTransform } from '@angular/core';
import { FilterType, FilterTypeValue } from '../../components/c-t-filter-type/c-t-filter-type.component';
import { Params } from '@angular/router';

@Pipe({
  name: 'mergeFilterTypeToQueryParams',
  standalone: true
})
export class MergeFilterTypeToQueryParamsPipe implements PipeTransform {

  transform(filters: FilterType[], value: FilterTypeValue, checked: boolean, currentQueryParams: Params): Params {    
    let typeParam = filters.flatMap(filter => {
      if (!filter.checked) { return []; }
      return filter.value;
    });

    if (checked) {
      typeParam = typeParam.filter(item => item !== value);
    } else {
      typeParam.push(value);
    }

    const queryParams = {
      ...currentQueryParams,
      type: typeParam,
    };
    
    return queryParams;
  }

}
