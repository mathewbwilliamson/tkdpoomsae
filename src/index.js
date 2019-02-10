import React from 'react'
import { render } from 'react-dom'
import Router from './components/Router'
import './css/index.css'
import * as serviceWorker from './serviceWorker';


render( <Router />, document.querySelector('#main'))

serviceWorker.register();

