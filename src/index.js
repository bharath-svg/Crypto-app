import React from "react"
import  ReactDOM  from "react-dom"
import App from "./App"
import { Provider } from "react-redux";
import store from "./app/Store"
import { BrowserRouter as Router } from 'react-router-dom';
import "antd/dist/antd.css"

ReactDOM.render(
    <Router>
    <Provider store={store}>
        <App />
    </Provider>
        
    </Router>,
document.getElementById("root"));