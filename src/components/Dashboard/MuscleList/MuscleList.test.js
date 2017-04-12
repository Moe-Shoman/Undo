import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MuscleList } from './MuscleList';
import toJson from 'enzyme-to-json';

describe('MuscleList component', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuscleList>MuscleList</MuscleList>, div);
  });

  test('snapshots', () => {
    const component = shallow(
      <MuscleList>MuscleList</MuscleList>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
