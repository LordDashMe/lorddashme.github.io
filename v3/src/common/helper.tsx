/*
 * This file is part of the lorddashme.github.io v3.
 *
 * (c) Joshua Clifford Reyes <reyesjoshuaclifford@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';

/**
 * Helper File.
 * 
 * All common functions are registered here.
 * 
 * @author Joshua Clifford Reyes <reyesjoshuaclifford@gmail.com>
 */

/**
 * Is SSR Checker Function.
 * 
 * Primary used to skip some code blocks when the SSR rendering executed
 * upon gatsby building process.
 * 
 * @return {Boolean}
 */
export const isSSR = (): boolean => typeof window === 'undefined';

/**
 * Is Mobile Checker Function.
 * 
 * Use to change state when the width detected match the size of the mobile.
 * Tablet and Mobile size is considered as mobile.
 * 
 * @return {Boolean}
 */
export const isMobile = (): boolean => (window.screen.width <= 1023);

/**
 * Theme Constant
 * 
 * Basically this is used to unified some of the property to be use.
 * 
 * The same implementation of this will be see on the "gatsby-ssr.js"
 * to avoid any inconsistent condition for theme.
 */
export const themeConstant = {
  LIGHT: 'light',
  DARK: 'dark'
};

/**
 * Theme Global Properties.
 * 
 * Access one of this property to interact with the theme process.
 */
declare global {
  interface Window {
    __themeConstant: any;
    __theme: any;
    __setTheme: Function;
  }
};

/**
 * Loadable Plugin Fallback Template for Lazy Loaded Component.
 * 
 * @param {String} targetComponentElementFallback The target element definition to be pass on 
 *                                                querySelector that will be use as the callback template.
 * 
 * @return {JSX.Element|null}
 */
export const loadableFallbackTemplate = (targetComponentElementFallback: string): JSX.Element|null => {
  
  if (!isSSR() && document.querySelector(targetComponentElementFallback)) {
    return (
      <div 
        key={targetComponentElementFallback.toString()} 
        dangerouslySetInnerHTML={{__html: document.querySelector(targetComponentElementFallback).outerHTML}}>
      </div>
    );
  }

  return null;
};

/**
 * The code snippet for Debounce Strategy.
 *
 * @param {Function} callback    The callback function that will be debouce.
 * @param {Number}   waitingTime The (N) milliseconds that the callback function  
 *                               will be call after no call action made.
 *
 * @return {*}
 */
export const debounce = (callback: Function, waitingTime: number = 0): any => {

  if (typeof callback !== 'function') {
      throw Error('The first argument is not a type function.');
  }

  if (typeof waitingTime !== 'number') {
      throw Error('The second argument is not a type number');
  }

  let timeout = null;

  return (...args: any) => {

    let context = this;

    clearTimeout(timeout);

    timeout = setTimeout(function() {
        timeout = null;
        callback.apply(context, args);
    }, waitingTime);
  };
};

/**
 * The common function for checking the element if visible on the browser viewport.
 * 
 * @param {HTMLElement} element The selected element instance.
 * 
 * @return {Boolean}
 */
export const isElementInViewport = (element: HTMLElement): boolean => {

  const rect = element.getBoundingClientRect();

  return (
    Math.floor(rect.top) >= 0 &&
    Math.floor(rect.left) >= 0 &&
    Math.floor(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) &&
    Math.floor(rect.right) <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * The common function for checking if the current view is at the bottom page.
 * 
 * @param {Function} callback The callback function that will be when the condition is true.
 * 
 * @return {VoidFunction}
 */
export const isAtTheBottomPage = (callback: Function): void => {
  // An additional 500 pixels so that we can execute the callback in advance.
  if ((window.innerHeight + window.scrollY + 500) >= document.body.offsetHeight) { callback(); }
};

/**
 * The common function for lazy loading component bottom page trigger.
 * 
 * @param {*}        state    The state of the current Page/Component. 
 * @param {Function} callback The callback function that will be when the condition is true.
 * 
 * @return {*}
 */
export const lazyLoadBottomPageTrigger = (state: any, callback: Function): any => {

  const newState = {...state};

  const handleScroll = debounce(() => {

    isAtTheBottomPage(() => {

      const totalItems = newState.items.length - 1;
      
      for (let x = 0; x <= totalItems; x++) {
        if (!newState.items[x]) {
          newState.items[x] = true;
          break;
        }
      }

      if (newState.items[totalItems]) {
        newState['isDone'] = true;
      }

      callback(newState);
      
    });

  }, 300);

  if (!newState.isDone) {
    window.addEventListener('scroll', handleScroll);
  }

  return {
    state: state,
    unsubscribe: () => { window.removeEventListener('scroll', handleScroll); }
  };
};
