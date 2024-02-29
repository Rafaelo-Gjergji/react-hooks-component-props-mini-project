import React from "react"; // Import 'React' library

function About(props) {
  // A new functional component called 'About', it takes in a single perameter 'props'
  const { image, about } = props; // Destructure props to access image and about

  return (
    <aside>
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />{" "}
      {/* Use the placeholder image if no prop has been passed */}
      <p>{about}</p> {/* Display the about text passed as a prop */}
    </aside>
  );
}

export default About; // Export the 'About' component so that it can be imported and used in other files
