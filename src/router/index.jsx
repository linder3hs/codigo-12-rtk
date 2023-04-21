import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}
