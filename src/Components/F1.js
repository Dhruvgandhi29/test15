import "./styles.css";
export function F1() {
  const myStyle = {
    color: "blue",
    backgroundColor: "orange",
  };

  return (
    <div>
      <hr></hr>
      <h1>React Styling</h1>
      <h2 style={{ color: "red" }}>Inline styling</h2>
      <h2 style={myStyle}>Internal styling</h2>
      <h2 class="c1">External styling</h2>
    </div>
  );
}
//We have created a function component to display the particular workings
export function Home() {
  return <h1>Home component</h1>;
}
export function About() {
  return <h1>About component</h1>;
}
export function Blog() {
  return <h1>Blog component</h1>;
}
export function Contact() {
  return <h1>Contact component</h1>;
}
