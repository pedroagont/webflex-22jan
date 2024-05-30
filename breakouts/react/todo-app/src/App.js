import { useState } from 'react';
import './App.css';

function useAppData() {
  const [todoListData, setTodoListData] = useState([
    'learn html',
    'learn css',
    'learn js',
  ]);
  // const [loading, setLoading] = useState(false)
  // const [favorites, setFavorites] = useState([])

  // const [ state, setState] = useState({
  //   todoListData: [],
  //   loading: false,
  //   favorites: []
  // })

  // const [ state, dispatch ] = useReducer(reducer, {
  //   todoListData: [],
  //   loading: false,
  //   favorites: []
  // })

  const handleCreateTodo = (event) => {
    event.preventDefault();
    // console.log('hello from form!');
    // console.log(event.target.elements.content.value);

    const { content } = event.target.elements;
    // console.log(content.value);

    setTodoListData([...todoListData, content.value]);
    content.value = '';
  };

  return { todoListData, handleCreateTodo };
}

function App() {
  const { todoListData, handleCreateTodo } = useAppData();
  return (
    <>
      <header>
        <h1>Todo app! 🗒</h1>
      </header>
      <main>
        <form onSubmit={handleCreateTodo}>
          <h3>Create a todo</h3>
          <input type='text' name='content' autoComplete='off' />
          <button>Submit</button>
        </form>
        <ul>
          {todoListData.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
