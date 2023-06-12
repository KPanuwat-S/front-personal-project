import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
      <Router />
      <ToastContainer position="bottom-center" theme="light" autoClose={3000} />
    </>
  );
}

export default App;
