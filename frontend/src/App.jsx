import { Provider } from "mobx-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, History } from "./pages";

function App() {
  return (
    <Provider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
