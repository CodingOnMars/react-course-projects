import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

// Store items in session storage
const getSessionStorage = () => {
  let list = sessionStorage.getItem('list');
  if (list) {
    return JSON.parse(sessionStorage.getItem('list'));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getSessionStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the value is empty
    if (!name) {
      // Display alert
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      // Edit item name
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value changed');
    } else {
      // Show alert
      showAlert(true, 'success', 'Item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      // Clear input value
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'List cleared');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removed');
    // If item id is match, add it to a new array
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    sessionStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            type='text'
            placeholder='e.g. spinach'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
