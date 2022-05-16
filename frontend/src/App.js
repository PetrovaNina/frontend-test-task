import { Provider } from "mobx-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, History } from "./pages";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
