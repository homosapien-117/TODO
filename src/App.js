import { useState } from "react";
import "./App.css";
function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const [error, setError] = useState("");
  const deleteTodo = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  };
  return (
    
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Not OneDay, it's Day One🌝 ☕️ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          placeholder="🖊 Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() =>{
            if (toDo.trim() === "") {
              setError("Task cannot be empty!");
              return;
            }
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
            setTodo("");
            setError("");
          }   
          }
        ></i>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <i
                nput
                  onChange={(event) => {
                    console.log(event.target.checked);
                    console.log(obj);
                    setTodos(toDos.filter(obj2=>{
                      if (obj2.id===obj.id) {
                        obj2.status=event.target.checked
                      }
                      return obj2
                    }))
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => deleteTodo(obj.id)}></i>
              </div>
            </div>
          );
        })}
        {
          toDos.map((obj)=>{
            if (obj.status) {
              return (<h1>{obj.text}</h1>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;