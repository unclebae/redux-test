import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux-module/store';
import action from './redux-module/action';

const Counter = () => {

    return (
        <div>
            <h1>{store.getState()}</h1>
            <button onClick={action.increment}>Increment</button>
            <button onClick={action.decrement}>Decrement</button>
        </div>
    )
}
const render = () => ReactDOM.render(<Counter />, document.getElementById('root'));
render()
store.subscribe(render);