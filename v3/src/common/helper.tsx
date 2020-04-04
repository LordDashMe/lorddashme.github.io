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
 * @return {VoidFunction}
 */
export const isSSR = (): boolean => typeof window === "undefined";

/**
 * Loadable Plugin Fallback Template for Lazy Loaded Component.
 * 
 * @param {String} targetComponentElementFallback  The target element definition to be pass on 
 *                                                 querySelector that will be use as the callback template.
 * 
 * @return {JSX.Element | null}
 */
export const loadableFallbackTemplate = (targetComponentElementFallback: string): JSX.Element | null => {
  
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
