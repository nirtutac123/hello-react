/**
 * <div>
 * <div id="child">
 * <h1> I am h1 tag.</h1>
 * <h2> I am h1 tag.</h2>
 *
 * </div>
 * <div id="child2">
 * <h1> I am h2 tag.</h1>
 * <h2> I am h2 tag.</h2>
 *
 * </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 */
//Create nested structures inside your react applications
const parent = React.createElement(
  //parent is object-react element
  "div",
  { id: "parent" }, // created a div which has id: parent
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm an h1 tag."),
      React.createElement("h2", {}, "I'm an h2 tag."),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an h1 tag."),
      React.createElement("h2", {}, "I'm an h2 tag."),
    ]),
  ]
  //As a children i have passed id-child to it
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" }, //attributes that go to props
//   "Hello World from React!" // children that will go to h1 tag
// );
console.log(parent); //returns an object
//Created an h1 tag with "Hello World from React" by using React.createElement
const root = ReactDOM.createRoot(document.getElementById("root"));
//created a root inside React, root is the place where all the react code will run; //Everything that we render we render inside the root

root.render(parent); // It is putting parent inside root tag.
