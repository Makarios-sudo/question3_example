import "./App.css";
import ListPosts from "./components/ListPosts";

function App() {
  return (
    <div className="App">
      <h1> All My Post </h1>
      {/* calling the list post component */}
      <ListPosts />
    </div>
  );
}

export default App;
