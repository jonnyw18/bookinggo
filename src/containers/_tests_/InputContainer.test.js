import InputContainer from '../InputContainer';

describe('<InputContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InputContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
