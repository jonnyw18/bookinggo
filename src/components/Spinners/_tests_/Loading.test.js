import Loading from '../Loading';

describe('<Loading />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
