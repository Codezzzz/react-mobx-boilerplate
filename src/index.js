import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import RootStore from './stores/RootStore'


const rootStore = new RootStore()

const stores = {
    rootStore,
}

ReactDOM.render( 
    <Provider {...stores} >
    <App></App>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
