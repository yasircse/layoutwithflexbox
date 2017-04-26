import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pf-container">

        <div className="pf-sidebar-container">
          <div className="pf-sidebar">
            <ul className="list">
              <li className="list-items"><a className="link" href="#">Home</a></li>
              <li className="list-items"><a className="link" href="#">Posts</a></li>
              <li className="list-items"><a className="link" href="#">About</a></li>
            </ul>
          </div>
        </div>

        <div className="pf-content">
          <p>React is front end library developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and it has strong foundation and large community behind it.</p>
          <h1>Services</h1>

          <div className="pf-grid">
            <div className="pf-grid-items">
              <h2>Audience</h2>
              <p>This tutorial will help JavaScript developers that are diving in the ReactJS world for the first time. We will try to introduce every concept by showing simple code examples that can be easily understood</p>
              <a href="#">Learn more➞</a>
            </div>
            <div className="pf-grid-items">
              <h2>Prerequisites</h2>
              <p>If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5 and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful</p>
              <a href="#">Learn more➞</a>
            </div>
            <div className="pf-grid-items">
              <h2>Stateless</h2>
              <p>Our first component in example below is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component.</p>
              <a href="#">Learn more➞</a>
            </div>
            <div className="pf-grid-items">
              <h2>Redux</h2>
              <p>This tutorial will help JavaScript developers that are diving in the ReactJS world for the first time. We will try to introduce every concept by showing simple code examples that can be easily understood.</p>
              <a href="#">Learn more➞</a>
            </div>
            <div className="pf-grid-items">
              <h2>Router</h2>
              <p>This tutorial will help JavaScript developers that are diving in the ReactJS world for the first time. We will try to introduce every concept by showing simple code examples that can be easily understood.</p>
              <a href="#">Learn more➞</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
