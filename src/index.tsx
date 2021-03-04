import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoStore from './store/TodoStore'
import ThemeProvider from './store/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <TodoStore>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TodoStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
