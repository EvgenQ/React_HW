import React, {useState} from 'react';
import Message from './Message';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
      <input placeholder="Введите здесь какой-то текст" class="inputblock" value={inputText} onChange={(e) => setInputText(e.target.value)}/>

      <Message textToShow="Something text"/>

      <Message textToShow={inputText} class="messagetext"/>
    </div>
  );
}

export default App;
