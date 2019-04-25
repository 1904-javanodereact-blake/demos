import React from 'react';
import { FirstComponent } from './first.component';

export class SecondComponent extends React.Component {

  render() {
    return (
      <h1>
        Second Component!!!!!!!
        <FirstComponent/>
      </h1>
    )
  }
}