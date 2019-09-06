import React from 'react';
import * as rtl from '@testing-library/react';
//import ReactDOM from 'react-dom';
import App from './App';
import NavbarSlider from "./components/NavbarSlider";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



test('Strike button is rendering', () => {
  const container = rtl.render(<NavbarSlider />)
  console.log(container);
})



test('contains womans', () => {
  // Arrange
  const { getByText } = rtl.render(<App />);
  // Act - getting the node by text
  getByText(/womans/i);
});

test('contains world cup', () => {
  // Arrange
  const { getByText } = rtl.render(<App />);
  // Act - getting the node by text
  getByText(/world cup/i);
});

