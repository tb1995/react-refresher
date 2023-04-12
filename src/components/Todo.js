import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler(text) {
    setModalIsOpen(!modalIsOpen);
  }

  function deleteTodo() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={deleteHandler} onConfirm={deleteTodo} />}

      {modalIsOpen && <Backdrop onClick={deleteHandler} />}
    </div>
  );
}

export default Todo;
