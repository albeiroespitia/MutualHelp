import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Rutas />, document.getElementById('root'));
registerServiceWorker();
