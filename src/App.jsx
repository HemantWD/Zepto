import Chip from "./components/Chip";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" m-2 p-4 text-center text-3xl text-blue-500 font-bold">
        Pick User
      </div>
      <Chip />
    </div>
  );
}

export default App;
