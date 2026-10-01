import Book from "./components/Book";

const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/81v+ERPtdsL._AC_UY327_QL65_.jpg",
  bname: "React Design Patterns and Best Practices",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_QL65_.jpg",
  bname: "React.js for beginners",
  price: 197,
  quantity: 10,
  rating: 3.3,
};




export default function App() {
  

  return (
    <>
    <h1>Online Book Store</h1>;
    <div className="container">
      <Book book={b1}/>
      <Book book={b1}/>
      <Book book={b2}/>
      <Book book={b2}/>
      
    </div>
    </>
  );
}
