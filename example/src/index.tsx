import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'dodo';
import 'dodo/dist/index.cjs.css';

const App = () => (
  <div className="ok">
    <Button>12312313</Button>
    <Modal />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
