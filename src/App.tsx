import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <header id="header">
        <h1 id="logo">Movieio</h1>
        <Navbar
          id="main-navbar"
          links={[
            { name: "الرئيسية", path: "/" },
            { name: "أفلام", path: "/movies-page" },
            { name: "مسلسلات", path: "/series-page" },
            { name: "أنمي", path: "/anime-page" },
            { name: "المضاف حديثاً", path: "/latest-movies-page" },
          ]}
        />
        <button id="sign-up" type="button">
          تسجيل الدخول
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
