import React from 'react';
import { IIncrementerProps, IncrementerComponent } from './clicker-incrementer.component';
import { shallow } from 'enzyme';

describe('<IncrementerComponent />', () => {

  test('The provided increment function should be called when clicked',() => {
    const props: IIncrementerProps = {
      increment: jest.fn(),
      label: 'My Label'
    };

    const incrementer = shallow(<IncrementerComponent {...props}/>);
    const buttons = incrementer.find('button');
    expect(buttons).toHaveLength(1);
    const button = buttons.first();
    button.simulate('click');
    expect(props.increment).toHaveBeenCalled();
  })

  test('The provided increment function should be called each time it is clicked',() => {
    const props: IIncrementerProps = {
      increment: jest.fn(),
      label: 'My Label'
    };

    const incrementer = shallow(<IncrementerComponent {...props}/>);
    const buttons = incrementer.find('button');
    expect(buttons).toHaveLength(1);
    const button = buttons.first();
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(props.increment).toHaveBeenCalledTimes(3);
  })

  test('The button renders with the provided label',() => {
    const props: IIncrementerProps = {
      increment: jest.fn(),
      label: 'My Label'
    };

    const incrementer = shallow(<IncrementerComponent {...props}/>);
    const buttons = incrementer.find('button');
    expect(buttons).toHaveLength(1);
    const button = buttons.first();
    expect(button.text()).toEqual(props.label);
  })

  test('The button renders with the provided label 2',() => {
    const props: IIncrementerProps = {
      increment: jest.fn(),
      label: 'My Other Label'
    };

    const incrementer = shallow(<IncrementerComponent {...props}/>);
    const buttons = incrementer.find('button');
    expect(buttons).toHaveLength(1);
    const button = buttons.first();
    expect(button.text()).toEqual(props.label);
  })

})
