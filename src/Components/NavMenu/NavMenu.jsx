import react from "react";
import React, { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { useErrorBoundary } from "use-error-boundary";
import Bananas from '../Bananas'
import ImageLibrary from "../ImageLibrary";

const Home = () => {
  return (
    <p>... but why</p>
  );
}

const Play = () =>{
  return (
    <Bananas />
  );
}

const Library = () => {
  return (
    <>
      <h2>Liked bananas</h2>
      <ImageLibrary />
    </>
  );
}

const BrokenComponent = () => {
  throw new Error("💥");
}

const ErrorBoundaryComponent = () => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary()

  return (
    <>
      {didCatch ? (
        <ErrorComponent />
      ) : (
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
      )}
    </>
  )
  // this fails - whhyyyyyyy  
  // return (
  // <ErrorBoundary
  //   render={() => <BrokenComponent />}
  //   renderError={({ error }) => <ErrorComponent error={error} />}
  // /> )
}

const Navbar = () => {
  return (
    <>
      <ul className="nav-menu">
        <li className="nav-menu-item"><Link to="/">Home</Link></li>
        <li className="nav-menu-item"><Link to="/play">Play</Link> </li>
        <li className="nav-menu-item"><Link to="/library">Library</Link></li>
        <li className="nav-menu-item"><Link to="/broken">Don't click this ♡</Link></li>
      </ul>
    </>
  );
}

const NavMenu = () => {
  
  return (
    <>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/library" element={<Library />} />
          <Route path="/broken" element={<ErrorBoundaryComponent />} />
        </Routes>
      </BrowserRouter>

     
    </>
    
  );

}

export default NavMenu;