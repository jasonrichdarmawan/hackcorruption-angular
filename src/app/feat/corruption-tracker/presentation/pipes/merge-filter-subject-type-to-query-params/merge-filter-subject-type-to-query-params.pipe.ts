import { Pipe, PipeTransform } from '@angular/core';
import { FilterSubjectType, FilterSubjectTypeValue } from '../../components/c-t-filter-subject-type/c-t-filter-subject-type.component';
import { Params } from '@angular/router';

@Pipe({
  name: 'mergeFilterSubjectTypeToQueryParams',
  standalone: true
})
export class MergeFilterSubjectTypeToQueryParamsPipe implements PipeTransform {

  transform(filters: FilterSubjectType[], value: FilterSubjectTypeValue, checked: boolean, currentQueryParams: Params): Params {    
    let subjectTypeParam = filters.flatMap(filter => {
      if (!filter.checked) { return []; }
      return filter.value;
    });

    if (checked) {
      subjectTypeParam = subjectTypeParam.filter(item => item !== value);
    } else {
      subjectTypeParam.push(value);
    }

    const queryParams = {
      ...currentQueryParams,
      subjectType: subjectTypeParam,
    };
    
    return queryParams;
  }

}
