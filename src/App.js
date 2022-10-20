import bg from "./assets/bg-main-desktop.png";

import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

function App() {
  return (
    <>
      <div
        className="h-screen bg-no-repeat font-['Space_Grotesk']"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 w-fit h-screen justify-center relative ml-10">
            <CardFront />
            <CardBack />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
