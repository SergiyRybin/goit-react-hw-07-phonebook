import { Route, Routes } from "react-router";
import MainFrom from "./MainForm/MainForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="register" />
        <Route path="login" />
        <Route path="contacts" />
      </Routes>
      <MainFrom />
    </>
  );
};
export default App;
