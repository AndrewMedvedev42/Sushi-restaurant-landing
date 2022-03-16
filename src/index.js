import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/css/index.css"
import "./styles/css/components.css"
import "./styles/css/products.css";
import "./styles/css/how-to-work.css";
import "./styles/css/navigation-bar.css"
import "./styles/css/services.css"
import "./styles/css/home.css"
import "./styles/css/footer.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
