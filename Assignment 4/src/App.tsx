import "./App.css";
import AppContainer from "./ui/AppBody";
import Footer from "./ui/footer";
import ListView from "./ui/listView";
import Nav from "./ui/nav";

function App() {
  return (
    <>
      <AppContainer>
        <Nav></Nav>
        <ListView></ListView>
        <Footer></Footer>
      </AppContainer>
    </>
  );
}

export default App;
