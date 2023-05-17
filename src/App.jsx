import "./App.css"
import { MyContextProvider } from "./components/MyContext";
import Main from "./container/Main"

function App() {


  return (
    <MyContextProvider>
      <div className="bg-blue-500 h-[100vh] w-full flex flex-col gap-5 text-5xl justify-center items-center">
        <h1>QUIZ</h1>
        <Main></Main>
      </div>
    </MyContextProvider>
  );
}

export default App;
