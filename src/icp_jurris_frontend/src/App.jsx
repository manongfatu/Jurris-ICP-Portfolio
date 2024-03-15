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
      </div>
    </main>
  );
}

export default App;
