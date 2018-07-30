import Input from '../Input';

describe('<Input />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <Input
            handleChange={() => {}}
            handleOnFocus={() => {}}
            handleOnBlur={() => {}}
            userInput={''}
            loading={true}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });

    it('Formats header text correctly', () => {
      const wrapper = render(
            <Input
                handleChange={() => {}}
                handleOnFocus={() => {}}
                handleOnBlur={() => {}}
                userInput={''}
                loading={true}
            />
       );
       const text = wrapper.find('h2').text();
       expect(text).toEqual(' Let\'s find your ideal car ');
    });

    it('Calls handleOnFocus when user clicks on input', () => {
        const spy = sinon.spy();
        const wrapper = mount(
            <Input
                handleChange={() => {}}
                handleOnFocus={spy}
                handleOnBlur={() => {}}
                userInput={''}
                loading={true}
            />
        );
        const input = wrapper.find('input');

        input.simulate('focus');
        expect(spy.calledOnce).toBe(true);
    });

    it('Calls handleOnBlur when user clicks away from input', () => {
        const spy = sinon.spy();
        const wrapper = mount(
            <Input
                handleChange={() => {}}
                handleOnFocus={() => {}}
                handleOnBlur={spy}
                userInput={''}
                loading={true}
            />
        );
        const input = wrapper.find('input');

        input.simulate('blur');
        expect(spy.calledOnce).toBe(true);
    });

    it('Calls handleChange when user types into input', () => {
        const spy = sinon.spy();
        const wrapper = mount(
            <Input
                handleChange={spy}
                handleOnFocus={() => {}}
                handleOnBlur={() => {}}
                userInput={''}
                loading={true}
            />
        );
        const input = wrapper.find('input');

        input.simulate('change', { value: 'Change' });
        expect(spy.calledOnce).toBe(true);
    })
});
