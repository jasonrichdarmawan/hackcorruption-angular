import { MergeFilterTypeToQueryParamsPipe } from './merge-filter-type-to-query-params.pipe';

describe('MergeFilterTypeToQueryParamsPipe', () => {
  it('create an instance', () => {
    const pipe = new MergeFilterTypeToQueryParamsPipe();
    expect(pipe).toBeTruthy();
  });
});
