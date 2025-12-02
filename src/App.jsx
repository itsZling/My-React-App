import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Buttton.jsx";
import Students from "./Students.jsx";

function App() {

  return(
    <>
      <Card name='Apothecary' />
      <Header/>
      <Students name='Spongbob' age={30} isStudent={true}/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App
