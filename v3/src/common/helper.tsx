/**
 * Website Common Functions.
 * 
 * All common curated helpers are registered here.
 */

import React from 'react';

export const isSSR = (): boolean => typeof window === "undefined";

export const loadableFallbackTemplate = (targetComponentElementFallback: string): JSX.Element => {
  
  if (!isSSR()) {
    if (document.querySelector(targetComponentElementFallback)) {
      return (
        <div key={targetComponentElementFallback.toString()} 
             dangerouslySetInnerHTML={{__html: document.querySelector(targetComponentElementFallback).outerHTML}}>
        </div>
      );
    }
  }

  return null;
};
