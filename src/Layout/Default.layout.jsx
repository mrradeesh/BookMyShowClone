import React from "react";
import Navbar from "../Components/Navbar/Navbar.component";
const DefaultlayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </>
    );
  };
export default DefaultlayoutHOC;
