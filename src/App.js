import React, { Suspense } from "react";
import "./App.css";
import Layout from "./Layout";
import "./utils/rem";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
    </Suspense>
  );
}

export default App;
