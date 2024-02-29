import React from "react"; // This line imports the 'React' Library

function Header(props) {
  // New functional component called 'Header', it takes a single perameter 'props'
  return (
    //The JSX that the 'Header' component will render
    <header>
      {" "}
      {/* A '<header>' containing a '<h1>' element is returned  */}
      <h1>{props.name}</h1>{" "}
      {/* The content of the '<h1>' element is the value of the 'name' prop passed to the 'Header' component. */}
    </header>
  );
}

export default Header; // Exports the 'Header' component so it can be imported and used in other files
