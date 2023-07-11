import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      {" "}
      <Router />
      <ToastContainer position="bottom-center" theme="light" autoClose={2000} />
    </>
  );
}

export default App;
