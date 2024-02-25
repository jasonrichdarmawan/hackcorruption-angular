import { MergeFilterSubjectTypeToQueryParamsPipe } from './merge-filter-subject-type-to-query-params.pipe';

describe('MergeFilterSubjectTypeToQueryParamsPipe', () => {
  it('create an instance', () => {
    const pipe = new MergeFilterSubjectTypeToQueryParamsPipe();
    expect(pipe).toBeTruthy();
  });
});
