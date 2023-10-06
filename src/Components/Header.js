//props is an object
//props={name="Dhruv"}
function Header(props) {
  return (
    <div>
      <h2>
        Hello {props.name} working as {props.role} for the last {props.exp}{" "}
        years
      </h2>
    </div>
  ); //output is hello props.name for normal text
}
export function Nav() {
  return (
    <div>
      <h2>Nav component</h2>
    </div>
  );
}
export default Header;
