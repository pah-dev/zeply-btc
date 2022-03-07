import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "wouter";
import Home from "./components/Home";
import Trans from "./components/Trans";
import Address from "./components/Address";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";
import AddressTop from "./components/AddressTop";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <section className="app-content">
          <Header />
          <Switch>
            <Route component={Home} path="/"></Route>
            <Route component={Address} path="/address/:hash"></Route>
            <Route component={Trans} path="/transactions/:addr"></Route>
            <Route component={Trans} path="/transaction/:hash"></Route>
            <Route component={AddressTop} path="/foo"></Route>
          </Switch>
        </section>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
