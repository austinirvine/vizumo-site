import React, {Component} from 'react'; 
import FormControl from 'react-bootstrap/FormControl';
import {
    BrowserRouter as Router, 
    Link, 
    Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from './Table';
import Form from './Form';
import './app.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tabbing from './Components/Tabbing';
import Main from './Views/MainPage';
import About from './Views/About';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Blog from './Views/Blog';

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-133675835-1');
};

const topics = [
    {
      name: 'React Router',
      id: 'react-router',
      description: 'Declarative, component based routing for React',
      resources: [
        {
          name: 'URL Parameters',
          id: 'url-parameters',
          description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
          url: 'https://tylermcginnis.com/react-router-url-parameters/'
        },
        {
          name: 'Programatically navigate',
          id: 'programmatically-navigate',
          description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
          url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
        }
      ]
    },
    {
      name: 'React.js',
      id: 'reactjs',
      description: 'A JavaScript library for building user interfaces',
      resources: [
        {
          name: 'React Lifecycle Events',
          id: 'react-lifecycle',
          description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
          url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
        },
        {
          name: 'React AHA Moments',
          id: 'react-aha',
          description: "A collection of 'Aha' moments while learning React.",
          url: 'https://tylermcginnis.com/react-aha-moments/'
        }
      ]
    },
    {
      name: 'Functional Programming',
      id: 'functional-programming',
      description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
      resources: [
        {
          name: 'Imperative vs Declarative programming',
          id: 'imperative-declarative',
          description: 'A guide to understanding the difference between Imperative and Declarative programming.',
          url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
        },
        {
          name: 'Building User Interfaces with Pure Functions and Function Composition',
          id: 'fn-composition',
          description: 'A guide to building UI with pure functions and function composition in React',
          url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
        }
      ]
    }
  ]
  
  function Resource ({ match }) {
    const topic = topics.find(({ id }) => id === match.params.topicId)
      .resources.find(({ id }) => id === match.params.subId)
  
    return (
      <div>
        <h3>{topic.name}</h3>
        <p>{topic.description}</p>
        <a href={topic.url}>More info.</a>
      </div>
    )
  }
  
  function Splash () {
    return (
      <h1>
            <center>
              <p2>
              Vizumo Virtual Reality Tours
              </p2>
              <br></br>
              <p2>
                Pioneering the Way You Looks At Homes
              </p2>
            </center>
          

          <body>
            <p2>
              
            </p2>
          </body>
      </h1>
    )
  }
  
  class App extends Component {
    render() {
      return (
        <Router>
            <div className="app">
                <header>
                  {/* Global site tag (gtag.js) - Google Analytics */}
                  <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-133675835-1"
                  />
                  <script>{injectGA()}</script>
                </header>
                <Navbar bg="green" expand="lg">
                    <Navbar.Brand href="/">
                    <img
                      alt=""
                      src={require('./tri.png')}
                      width="60"
                      height="60"
                      className="d-inline-block align-center"
                    />
                      {' Vizumo '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="navClass">
                            {/* <Link to="/"><Nav.Link href="/"></Nav.Link></Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
    
                <Route exact path='/' component={Splash} />
            </div>
        </Router>
      )
    }
  }
  
  export default App