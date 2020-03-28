import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* DEV CONTROLLED - CRITICAL ASSETS START */}
          <meta name="theme-color" content="#000000" />
          {/* 
            <link rel="preload" href={`/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2`} as="font" type="font/woff2" />
            <link rel="preload" href={`/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2`} as="font" type="font/woff2" />
            <link rel="preload" href={`/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2`} as="font" type="font/woff2" /> 
          */}
        {/* DEV CONTROLLED - CRITICAL ASSETS END */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {/* DEV CONTROLLED - LAZY LOAD ASEETS START */}
          <script defer src={`/resources/vendor/vendor.js`}></script>
        {/* DEV CONTROLLED - LAZY LOAD ASEETS END */}
        {props.postBodyComponents}  
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
