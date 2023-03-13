import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoList />
        </div>
    );
}

export default App;
