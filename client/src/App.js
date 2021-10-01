import './App.css';

var listItems;
fetch('http://localhost:5000/list')
.then(response => response.json())
.then(data => listItems = data);

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      {listItems}
    </div>
  );
}

export default App;
