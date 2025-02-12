import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import routesConfig from "./Utils/routesConfig";

function App() {
  return (
    <div className="App">
      <Suspense fallback={"Loading . . ."}>
        <Router>
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route?.path} element={route?.element} />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
