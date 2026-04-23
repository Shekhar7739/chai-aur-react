import React  from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click me to visit google",
};

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit google
  </a>
);
ReactDOM.createRoot(document.getElementById('root')).render(

   anotherElement

)
