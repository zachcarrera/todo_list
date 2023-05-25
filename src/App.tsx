import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "./components/TodoList";

function App() {
    return (
        <div className="App container">
            <h1>Todo List</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

export default App;
