import { useState } from "react";
import {
  HomePage,
  AboutPage,
  ProjectPage,
  ServicePage,
  BlogPage,
} from "./screens";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TypeHeader } from "./constants/header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path={TypeHeader.ABOUT.path} element={<AboutPage />} />
          <Route path={TypeHeader.PROJECT.path} element={<ProjectPage />} />
          <Route path={TypeHeader.SERVICE.path} element={<ServicePage />} />
          <Route path={TypeHeader.BLOG.path} element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
