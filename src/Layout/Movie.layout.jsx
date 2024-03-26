import React from "react";
import MovieNavbar from "../Components/Navbar/MovieNavbar.component";

const MovielayoutHOC =
  (component) =>
  ({ ...props }) => {
    return (
      <>
        <MovieNavbar />
        <component {...props} />
      </>
    );
  };

export default MovielayoutHOC;
