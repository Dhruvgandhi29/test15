function C4() {
  const names = ["Raj", "Rahul", "Shankar", "Dinesh", "Mahesh"];
  const ListName = () => {
    return names.map((val, ind) => {
      return <li key={ind}>{val}</li>;
    });
  };
  return (
    <div>
      <ol>
        {ListName()}
        {/* lists the items */}
      </ol>
    </div>
  );
}
export default C4;
