import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './initial/MyComponent';
import MySection from './initial/MySection';
import MyButton from './initial/MyButton';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <MyComponent /> */}
    <MySection>
      <MyButton>My button text</MyButton>
    </MySection>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
