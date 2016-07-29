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
  
        <nav>
          <ul>
            <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
            <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
            <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
            <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
            <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
            <li><DirectLink className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</DirectLink></li>
            <li><Link activeClass="active" className="test7" to="test7" spy={true} smooth={true} duration={durationFn}>Test 7 (duration and container)</Link></li>
            <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>
            <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
            <li> <a onClick={() => scroll.scrollMore(500)}>Scroll 500 More!</a></li>
            <li> <a onClick={() => scroll.scrollMore(1000, { delay : 1500 })}>Scroll 1000 More! ( delay ) </a></li>
          </ul>
        </nav>
        
        <Element name="test1" className="element" >
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <Element name="test3" className="element">
          test 3
        </Element>

        <Element name="test4" className="element">
          test 4
        </Element>

        <Element name="test5" className="element">
          test 5
        </Element>

      </div>
    )
  }
}

ReactDOM.render(
  <Section />,
  document.getElementById('app')
)