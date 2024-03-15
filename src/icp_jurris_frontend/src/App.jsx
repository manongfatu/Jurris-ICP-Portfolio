import Lottie from "lottie-react";
import astronaut from "../public/astronaut.json";

function App() {
  return (
    <main>
      <img className="img-dfinity" src="/logo2.svg" alt="DFINITY logo" />
      <div className="heading-wrapper">
        <div className="main-heading">
          <h1>Howdy, Earthling!</h1>
          <span>Embark on the Ultimate Adventure: Prepare for a Journey Beyond Earth!</span>
        </div>
        <Lottie className="img-astronaut" animationData={astronaut} />
        <div className="planets">
          <img className="planet1" src="/planet3.svg" alt="planet1 logo" />
          <img className="planet2" src="/planet6.svg" alt="planet2 logo" />
          <img className="planet3" src="/planet7.svg" alt="planet3 logo" />
          <img className="planet4" src="/planet8.svg" alt="planet4 logo" />
        </div>
      </div>
    </main>
  );
}

export default App;
