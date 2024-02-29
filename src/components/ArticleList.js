import React from 'react';              // This line imports the 'React' library
import Article from './Article';        // this line imports the 'Article' component from the 'Article.js' file in the same directory

function ArticleList({ posts }) {       // This line defines a new functional component called 'ArticleList'. Takes an object as an argument, destructuring the 'posts' property
  return (                              // The JSX that the 'ArticleList' component will rendure
    <main>                              {/** a  <main> element containing a series of Article components is returned, one for each post in the posts array.*/}
        {posts.map((post) => (          //The posts.map() function iterates over the posts array. For each post object in the array, it returns an Article component.
            <Article                    // Each 'Article' component is passed several props: 'key', 'title', 'date', and 'preview'. These props are extracted from the 'post' object.
              key ={post.id}            //The key prop is set to the unique identifier of each post (post.id).
              title={post.title}        //The 'title', 'date', and 'preview' props are set to the corresponding properties of each 'post' object.
              date={post.date}          //The 'title', 'date', and 'preview' props are set to the corresponding properties of each 'post' object.
              preview={post.preview}    //The 'title', 'date', and 'preview' props are set to the corresponding properties of each 'post' object.
            />                          //render an 'Article' component for each post, asigning a unique key
        ))}
    </main>
  );
}

export default ArticleList;             //This line exports the 'ArticleList' component so it can be imported and used in other files.