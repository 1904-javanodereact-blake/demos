import React from 'react';
import { shallow } from 'enzyme';
import { ClickerComponent, IClickerProps } from './clicker.component';
import { updateClicks } from '../../actions/clicker.actions';
import { IncrementerComponent } from './clicker-incrementer/clicker-incrementer.component';

describe('<ClickerComponent />', () => {

  test('A Incrementer renders when clicks is at -976', () => {
    const props: IClickerProps = {
      clicker: {
        clicks: -976
      },
      updateClicks: jest.fn()
    }
    const clicker = shallow(<ClickerComponent {...props}/>);
    expect(clicker.find(IncrementerComponent)).toHaveLength(1);
  })

  test('A Incrementer renders when clicks is at 0', () => {
    const props: IClickerProps = {
      clicker: {
        clicks: 0
      },
      updateClicks: jest.fn()
    }
    const clicker = shallow(<ClickerComponent {...props}/>);
    expect(clicker.find(IncrementerComponent)).toHaveLength(1);
  })

  test('A Incrementer renders when clicks is at 46', () => {
    const props: IClickerProps = {
      clicker: {
        clicks: 46
      },
      updateClicks: jest.fn()
    }
    const clicker = shallow(<ClickerComponent {...props}/>);
    expect(clicker.find(IncrementerComponent)).toHaveLength(1);
  })

  test('2 Incrementer renders when clicks is at 47', () => {
    const props: IClickerProps = {
      clicker: {
        clicks: 47
      },
      updateClicks: jest.fn()
    }
    const clicker = shallow(<ClickerComponent {...props}/>);
    expect(clicker.find(IncrementerComponent)).toHaveLength(2);
  })

  test('2 Incrementer renders when clicks is at 48', () => {
    const props: IClickerProps = {
      clicker: {
        clicks: 48
      },
      updateClicks: jest.fn()
    }
    const clicker = shallow(<ClickerComponent {...props}/>);
    expect(clicker.find(IncrementerComponent)).toHaveLength(2);
  })

  test('2 Incrementer renders when clicks is at 500', () => {
    const props: IClickerProps = {
      clicker: {
        clicks: 500
      },
      updateClicks: jest.fn()
    }
    const clicker = shallow(<ClickerComponent {...props}/>);
    expect(clicker.find(IncrementerComponent)).toHaveLength(2);
  })
})
