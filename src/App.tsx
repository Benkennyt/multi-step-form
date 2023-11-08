import { useState } from "react";
import "./App.css";
import FormDisplay from "./component/Form/FormDisplay";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="App">
        <div className="make-center">
          <Sidebar page={page} />
          <FormDisplay page={page} setPage={setPage} />
        </div>
      
    </div>
  );
}

export default App;
