import Modal from './components/Modal';

const { default: Backdrop } = require('./components/Backdrop');
const { default: Todo } = require('./components/Todo');

function App() {
  return (
    <div>
      <h1> My Todos </h1>
      <Todo text="Test" />
      <Todo text="Wow" />
      <Todo text="It's a bloody prop" />
    </div>
  );
}

export default App;
