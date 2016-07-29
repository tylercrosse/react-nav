import './scss/main.scss'

import Modernizr from 'modernizr';

import React from 'react'
import ReactDOM from 'react-dom'
import Scroll, { Link, DirectLink, Element, Events, animateScroll as scroll } from 'react-scroll'

function durationFn() {
  return deltaTop;
}

class Section extends React.Component{
  constructor() {
    super();
    this.state = {
      open: ''
    }
    this.handleNavOpen = this.handleNavOpen.bind(this);
    this.handleNavClose = this.handleNavClose.bind(this);
  }
  handleNavOpen() {
    this.setState({open: !this.state.open ? 'open' : ''});
  }
  handleNavClose() {
    this.setState({open: ''});
  }
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
    });
    Events.scrollEvent.register('end', function() {
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <nav className={this.state.open + " vertical-nav"}>
          <ul>
            <li>
              <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} onClick={this.handleNavClose}>
                <span className="dot"></span>
                <span className="label">Test1</span>
              </Link>
            </li>
            <li>
              <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} onClick={this.handleNavClose}>
                <span className="dot"></span>
                <span className="label">Test2</span>
              </Link>
            </li>
            <li>
              <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} onClick={this.handleNavClose} >
                <span className="dot"></span>
                <span className="label">Test3</span>
              </Link>
            </li>
            <li>
              <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} onClick={this.handleNavClose}>
                <span className="dot"></span>
                <span className="label">Test4</span>
              </Link>
            </li>
          </ul>
        </nav>
        <a onClick={this.handleNavOpen} className="nav-trigger img-replace">Open navigation<span></span></a>

        <Element name="test1" className="section" >
          <p>Test 1</p>
        </Element>
        <Element name="test2" className="section">
          <p>Test 2</p>
        </Element>
        <Element name="test3" className="section">
          <p>Test 3</p>
        </Element>
        <Element name="test4" className="section">
          <p>Test 4</p>
        </Element>
      </div>
    )
  }
}

ReactDOM.render(
  <Section />,
  document.getElementById('app')
)