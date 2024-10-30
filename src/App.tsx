import Call from "./components/Call";
import CallLog from "./components/CallLog";
import Dailer from "./components/Dailer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dailer />,
  },
  {
    path: "/call-log",
    element: <CallLog />,
  },
  {
    path: "/call",
    element: <Call />,
  },
]);
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-black text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
