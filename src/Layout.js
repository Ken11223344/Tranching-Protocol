import React from "react";
import RouterView from "./router/index";
import RouterList from "./router/config";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterBar from './components/FooterBar'
export default function Layout() {
  return (
    <>
      <Router>
        <NavBar routes={RouterList} />
        <main>
          <RouterView routes={RouterList} />
          <FooterBar />
        </main>
      </Router>
    </>
  );
}
