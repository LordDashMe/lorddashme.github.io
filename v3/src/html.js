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
          <link rel="shortcut icon" href={`/resources/img/favicon.png`} />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href={`/resources/img/favicon.png`} />
        
        {/* 
          <link rel="preload" href={`/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2`} as="font" type="font/woff2" />
          <link rel="preload" href={`/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2`} as="font" type="font/woff2" />
          <link rel="preload" href={`/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2`} as="font" type="font/woff2" /> 
        */}

          <link rel="stylesheet" href={`/resources/vendor/fontawesome-free-5.10.2-web/css/all.min.css`} type="text/css"></link>
          <link rel="stylesheet"  href={`/resources/vendor/bootstrap-3.3.7/css/bootstrap.min.css`} type="text/css"></link>
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
        {props.postBodyComponents}
        
        {/* DEV CONTROLLED - LAZY LOAD ASEETS START */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" type="text/css" />
          <script defer src={`/resources/vendor/google-analytics/ga.min.js`}></script>
          <script defer src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        {/* DEV CONTROLLED - LAZY LOAD ASEETS END */}
        
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
