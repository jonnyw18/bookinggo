import SearchResults from "../SearchResults";

describe('<SearchResults />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <SearchResults
                searchData={[]}
                hideResults={true}
                getSelectedLocation={() => {}}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
