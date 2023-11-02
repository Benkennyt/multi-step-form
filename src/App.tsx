import { useState } from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Form from "./component/Form/Form";
import Sidebar from "./component/Sidebar";

function App() {
  const [page, setPage] = useState(0);


  return (
    <div className="App">
      <Sidebar />
      <div className="form-footer">
        <Form page={page} />
        <Footer setPage={setPage} page={page}/>
      </div>
    </div>
  );
}

export default App;
