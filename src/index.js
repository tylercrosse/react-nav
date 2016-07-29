import './scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Scroll, { Link, DirectLink, Element, Events, animateScroll as scroll } from 'react-scroll'

function durationFn() {
  return deltaTop;
}

class Section extends React.Component{
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
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
        <nav className="vertical-nav">
          <ul>
            <li>
              <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} ></Link>
              <span className="dot"></span>
              <span className="label">Intro</span>
            </li>
            <li>
              <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}></Link>
              <span className="dot"></span>
              <span className="label">Intro</span>
            </li>
            <li>
              <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} ></Link>
              <span className="dot"></span>
              <span className="label">Intro</span>
            </li>
            <li>
              <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}></Link>
              <span className="dot"></span>
              <span className="label">Intro</span>
            </li>
          </ul>
        </nav>
        <a className="nav-trigger img-replace">Open navigation<span></span></a>

        <Element name="test1" className="section" >
          <p>test 1</p>
        </Element>
        <Element name="test2" className="section">
          <p>test 2</p>
        </Element>
        <Element name="test3" className="section">
          <p>test 3</p>
        </Element>
        <Element name="test4" className="section">
          <p>test 4</p>
        </Element>
      </div>
    )
  }
}

ReactDOM.render(
  <Section />,
  document.getElementById('app')
)