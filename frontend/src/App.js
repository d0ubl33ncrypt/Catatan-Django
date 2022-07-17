import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./compoents/Header";
import NoteListPage from "./pages/NoteListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={NoteListPage} />
      </div>
    </Router>
  );
}

export default App;
