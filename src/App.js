import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./card.scss";
import "./jarvis.css";
import Employee from "./Components/Functional";
//import Student from './Components/ClassCompo';
import Eventhandle from "./Components/HandleEvent";
import Form from "./Components/Form.js";
import ContactList from "./Components/ContactList.js";
import Header from "./Components/Header.js";
import Blogcard from "./Components/Flipcard.js";
import Content from "./Components/content.js";
import Crud from "./Components/Crud.js";
import Carousel from "./Components/carousel";
import Dashboard from "./Components/Dashboard.js";
import Comingsoon from "./Components/comingsoon.js";
import Designprinciple from "./Components/Designprinciple.js";

function App() {
  return (
    <div>
      {/*<ContactList contact={contacts}/>*/}
      {/*<Employee name='Monika'/>
            <Student name="Avi"/>
            <Eventhandle/>
             */}
      <Header />
      {/*<Defaultpage/>*/}
      {/*<Employee name="Monika"/>*/}

      <Router>
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                {/*<img
                  src={`${process.env
                    .PUBLIC_URL}/assets/images/user2-160x160.jpg`}
                  className="img-circle"
                  alt="User Image"
                />*/}
              </div>
              {/*<div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="#">
                  <i className="fa fa-circle text-success" /> Online
                </a>
              </div>*/}
            </div>
           
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">
                <Link to={"/"}>Cover</Link>
              </li>
              <li className="header">
                <Link to={"/designprinciple"} >Jarvis Design principle</Link>
              </li>
               <li className="header">
                <Link to={"/comingsoon"}>Color pallette</Link>
              </li>
              <li className="header">
                <Link to={"/comingsoon"}>Content Handling</Link>
              </li>
               <li className="header">
                <Link to={"/comingsoon"}>UI Components</Link>
              </li>
              <li className="header">
                <Link to={"/comingsoon"}>Interactions</Link>
              </li>
               <li className="header">
                <Link to={"/comingsoon"}>Icons</Link>
              </li>
              <li className="header">
                <Link to={"/comingsoon"}>Navigation</Link>
              </li>
               <li className="header">
                <Link to={"/comingsoon"}>Gestures</Link>
              </li>
              <li className="header">
                <Link to={"/comingsoon"}>Heirarchy</Link>
              </li>
               <li className="header">
                <Link to={"/comingsoon"}>Tone of voice & Personality</Link>
              </li>
              <li className="header">
                <Link to={"/comingsoon"}>Jarvis Logo</Link>
              </li>
{/*
              <li className="header">MAIN NAVIGATION</li>
              <li className="treeview">
                <a href="#">
                  <i className="fa fa-files-o" />
                  <span>Layout Options</span>
                  <span className="pull-right-container">
                    <span className="label label-primary pull-right">4</span>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <Link to={"/userinfo"}>
                      <i className="fa fa-circle-o" /> Userinfo
                    </Link>
                  </li>
                  <li>
                    <Link to={"/crud"}>
                      <i className="fa fa-circle-o" /> About
                    </Link>
                  </li>
                  <li>
                    <Link to={"/form"}>
                      <i className="fa fa-circle-o" /> ContactForm
                    </Link>
                  </li>
                  <li>
                    <Link to={"/blogcard"}>
                      <i className="fa fa-circle-o" /> Card
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Carousel"}>
                      <i className="fa fa-circle-o" /> Carousel
                    </Link>
                  </li>
                </ul>
              </li>*/}
            </ul>

            {/*<Material />*/}
          </section>
        </aside>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route  path="/designprinciple" component={Designprinciple} />
          <Route  path="/comingsoon" component={Comingsoon} />
          <Route  path="/userinfo" component={Content} />
          <Route  path="/form" component={Form} />
          <Route path="/Crud" component={Crud} />
          <Route path="/Carousel" component={Carousel} />
          <Route path="/blogcard" component={Blogcard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
