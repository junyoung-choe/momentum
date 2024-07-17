function Card(props) {
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: props.backgroundColor || "white",
      }}
    >
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  );
}

export default Card;
