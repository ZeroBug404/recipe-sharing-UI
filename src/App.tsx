import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
