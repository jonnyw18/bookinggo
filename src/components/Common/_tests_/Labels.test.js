import Labels from '../Labels';

describe('<Labels />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Labels
        locations={{}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
