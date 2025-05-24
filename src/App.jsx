import EditPage from "./assets/pages/EditPage/EditPage.jsx";
import Home from "./assets/pages/Home/Home.jsx";
import Templates from "./assets/pages/Templates/Templates.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviewTemplateLT from "./assets/template/PreviewTemplateLT.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/templates" element={<Templates />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
