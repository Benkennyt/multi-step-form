import { useState } from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import FormDisplay from "./component/Form/FormDisplay";
import Sidebar from "./component/Sidebar";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Sidebar />
      <div className="form-footer">
        <FormDisplay page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
