import './App.css';
import Weather from "./weatherCard"
import Vid from "./vide0/rain.mp4"
function App() {
  return (
    <div className="App">
         <video className='vid' src={Vid} autoPlay muted ></video>
          <Weather/>
          </div>
  );
}

export default App;
