// -------------------- react
import React, {Component} from 'react';
// -------------------- react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// -------------------- react router
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
// ------------------- pages
import Home from "./pages/Home";
import Background from "./pages/Background";
import Files from "./pages/Files";
import FOIA from "./pages/FOIA";
import Citations from "./pages/Citations";
import Contact from "./pages/Contact";

// ------------------- components
import Header from "./components/Header";
import Footer from "./components/Footer";


// ------------------------- react app
class App extends Component {

  render() {
    return (
    <Router> 
      <div>
        <Container>
        <Header />
        
        <Route path="/" exact component={Home} />
        <Route path="/background" exact component={Background} />
        <Route path="/files" exact component={Files} />
        <Route path="/foia-request" exact component={FOIA} />
        <Route path="/citations" exact component={Citations} />
        <Route path="/contact-lma" exact component={Contact} />

        <Footer />
        </Container>
      </div> 
    </Router>
  );
  };
}

export default App;