
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Menu } from './components/menu';
import { Home } from "./components/home";

const App = () => (
    <div className="App">
        <Menu />
        <Home />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
