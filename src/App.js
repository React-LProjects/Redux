import { useSelector } from 'react-redux';
import './App.css';
import Home from "./Home"
function App() {
  const {c} = useSelector(state=>state.custom)

  return (
    <div className="App">
      <Home/>
      <h3>{c}</h3>

    </div>
  );
}

export default App;
