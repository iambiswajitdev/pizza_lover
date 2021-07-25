import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style.scss";
import NavBar from "./components/navBar";
import Prodact from "./page/prodact";
import Home from "./page/home";
import AddTocart from "./page/addTocart";
import SingelPageProdact from "./page/singelPageProdact";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/prodact" component={Prodact}></Route>
            <Route
              exact
              path="/singelPageProdact/:_id"
              component={SingelPageProdact}
            ></Route>
            <Route exact path="/addTocart" component={AddTocart}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
