import React from "react";

const Blog = () => {
  return (
    <div className="w-9/12 mx-auto mt-16 p-5">
      <h2 className="text-3xl font-bold my-3">
        What's the Purpase Of React Router ?
      </h2>
      <p>
        Ans : React Router is a standard library for routing in React. It
        enables the navigation among views of various components in a React
        Application, allows changing the browser URL, and keeps the UI in sync
        with the URL. .At its heart, React Router is a state container for the
        current location , or URL. It keeps track of the location and renders
        different routes as it changes, and it also gives you tools to update
        the location using Links and the history API
      </p>
      <br />
      <h2 className="text-3xl font-bold my-3">How Does Context Api Works ?</h2>
      <p>
        Ans : The React Context API is a way for a React app to effectively
        produce global variables that can be passed around. This is the
        alternative to "prop drilling" or moving props from grandparent to child
        to parent, and so on. Context is also touted as an easier, lighter
        approach to state management using Redux.
      </p>
      <br />
      <h2 className="text-3xl font-bold my-3">
        What is UseRef ? And How It Works ?
      </h2>
      <p>
        Ans : The useRef Hook allows you to persist values between renders. It
        can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly.useRef
        returns a mutable ref object whose .current property is initialized to
        the passed argument ( initialValue ). The returned object will persist
        for the full lifetime of the component. Essentially, useRef is like a
        “box” that can hold a mutable value in its .current property.
      </p>
    </div>
  );
};

export default Blog;
