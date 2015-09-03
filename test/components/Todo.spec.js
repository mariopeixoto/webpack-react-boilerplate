import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import Todos from '../../app/todos/components/Todos';

const { TestUtils } = React.addons;

function setup() {
  const props = {
    todos: [],
    actions: {
      addTodo: expect.createSpy()
    }
  };
  const component = TestUtils.renderIntoDocument(<Todos {...props} />);

  return {
    props: props,
    output: component,
    button: TestUtils.findRenderedDOMComponentWithTag(component, 'button').getDOMNode(),
    input: TestUtils.findRenderedDOMComponentWithTag(component, 'input').getDOMNode()
  };
}

describe('Todos component', () => {
  jsdomReact();

  it('button onClick should not call addTodo on empty input', () => {
    const { props, button } = setup();
    TestUtils.Simulate.click(button);
    expect(props.actions.addTodo).toNotHaveBeenCalled();
  });

  it('button onClick should call addTodo', () => {
    const { props, button, input } = setup();
    input.value = 'Do something';
    TestUtils.Simulate.change(input);
    TestUtils.Simulate.click(button);
    expect(props.actions.addTodo).toHaveBeenCalled();
  });

});
