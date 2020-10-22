import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Archive from "./pages/Archive";
import Acknowlegements from "./pages/Acknowlegements";
import Error404 from "./pages/Error404";
import News from "./pages/News";



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/archive" component={Archive}/>
          <Route path="/acknowledgements" component={Acknowlegements}/>
          <Route path="/news/:year/:month/:day/:name" component={News}/>
          <Route component={Error404}/>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
