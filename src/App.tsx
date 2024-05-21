import './App.css';
import Card from "./commponents/Card/Card.tsx";

function App() {

    return (
        <div className="playingCards faceImages">
              <Card rank={'a'} suit={'diams'}/>
        </div>
    );
}

export default App;
