import './App.css';
import Home from "./pages/home/Home"
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/emrtest">
            <Route index element={<Home /> }/>
            {/* <Route path="login" element={<Login/>}/> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
