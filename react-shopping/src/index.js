import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NetflixIndex } from './netflix/netflix-index';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import { Login } from './components/login/login';
import { DataBinding } from './components/data-binding/data-binding';
import { NasaComponentTable } from './components/nasa-api/nasa.component.table';
import { NasaComponentGrid } from './components/nasa-api/nasa.component.grid';
import { FakestoreComponent } from './components/fakestore-api/fakestore.component';
import { StyleBinding } from './components/style-binding/style.binding';
import { ClassBindingComponent } from './components/class-binding/class.binding';
import { ClassDemoComponent } from './components/class-demo/class.demo';
import { EventBinding } from './components/event-binding/event-binding';
import { MouseDemo } from './components/mouse-demo/mouse-demo';
import { MouseDemoCopy } from './components/mouse-demo/mouse-demoOverOut';
import { MouseDemoFlag } from './components/mouse-demo/mouse-demomove';
import { MouseDemoTouch } from './components/mouse-demo/mouse-demoTouch';
import { KeyDemo } from './components/key-demo/keydemo';
import { ButtonDemo } from './components/button-demo/button-demo';
import { HomeComponent } from './components/home/home';
import { LoginClassComponent } from './class-components/LoginClass.component';
import { FakestoreClass } from './class-components/FakestoreClass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FakestoreComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
