const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/81v+ERPtdsL._AC_UY327_QL65_.jpg",
  bname: "React Design Patterns and Best Practices",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};





function Book(props) {
  console.log(props);
  return (
    <div>
      <img
        src={props.book.picUrl}
        alt={props.book.bname}
      />
      <h1> {props.book.bname}</h1>
      <h2> Price: {props.book.price}</h2>
      <h3> Quantity: {props.book.quantity}</h3>
      <h4> Rating: {props.book.quantity}</h4>
    </div>
  );
}



export default function App() {

  return (
    <>
      <Book book={b1}/>
      <h1> Hello React</h1>;
      <Book book={b1}/>
      <Book book={b1}/>
      <Book book={b1}/>
    </>
  );
}
