import SearchResults from '../SearchResults';

describe('<SearchResults />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SearchResults
        searchData={[]}
        hideResults
        getSelectedLocation={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
