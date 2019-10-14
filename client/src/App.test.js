import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import *as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(rtl.cleanup)

test('render the app',()=>{
 const Wrapper= rtl.render(<App/>)
 Wrapper.debug()
 const element = Wrapper.debug(Wrapper.queryByText("Players App"))
 Wrapper.debug(Wrapper.queryByText("Dashboard"))

})
