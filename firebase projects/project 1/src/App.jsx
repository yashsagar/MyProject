import { getData } from "./utils/firebase";

function App() {
  console.log(getData("book"));
  return <div>test</div>;
}

export default App;
