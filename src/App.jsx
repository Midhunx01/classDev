import { Container } from "react-bootstrap";

import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <header>
        <h1 className="text-success">React Project</h1>
      </header>
      <main className="my-3">
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
