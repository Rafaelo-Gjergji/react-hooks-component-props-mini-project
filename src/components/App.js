import React from "react"; // This line imports the 'React' library
import Header from "./Header"; // Import the 'Header' Component from the 'Header.js' file in the same directory
import About from "./About"; // Import the 'About' Component from the 'About.js' file in the same directory
import ArticleList from "./ArticleList";// Imports the 'ArticleList' component from the 'ArticleList.js' file in the same directory
import blogData from "../data/blog"; // Imports the 'blogData' object from the '../data/blog.js file'

console.log(blogData); // Log in the 'blogData' object to the console

function App() {
  // Defines a new functional component called 'App'
  return (
    // The JSX that the 'App' component will render
    <div className="App">
      {" "}
      {/* A '<div>' element with the class name 'App', containing a 'Header' component is returned */}
      <Header name={blogData.name} />{" "}
      {/* The 'name' prop of the 'Header' component is set to the value of the 'name' property of the 'blogData' object*/}
      <About image={blogData.image} about={blogData.about} />{" "}
      {/** Pass the image and the 'about' props */}
      <ArticleList posts={blogData.posts} />{" "}
      {/* Pass the posts array to the ArticleList component */}
    </div>
  );
}

export default App; // Exports the 'App' component so it can be imported and used in other files
