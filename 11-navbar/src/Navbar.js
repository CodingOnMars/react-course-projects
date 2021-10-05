import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // Check height for ul with links
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // LINK: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    // console.log(linksHeight);

    // Adjust height of the container depending on links height
    /* NOTE: since we use inline styles, we need to add !important to CSS:
    
    .links-container {
    height: auto !important;
    }

    otherwise our links will not be displayed at width >= 800px

    */
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='' logo />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* NOTE: Simple toggle (no animation) approach
        {showLinks && (
          <div className='links-container show-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        */}
        {/* NOTE: Toggle navbar by adding CSS class. This approach add nice animation with the help of CSS. However, in CSS container height is hardcoded to 10rem. That means that adding or removing new links will also require to change CSS. So, this appoach is suboptimnal 
        <div
          className={`${
            showLinks ? 'links-container show-container' : 'links-container'
          }`}
        >
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
