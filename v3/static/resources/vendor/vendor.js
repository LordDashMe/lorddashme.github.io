const currentPath = window.location.pathname;

console.log('vendor: window.location.pathname', currentPath);

const vendor = {
  ga: () => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/resources/vendor/google-analytics/ga.min.js';
    document.body.appendChild(script);
    console.log('vendor: ga loaded!');
  },
  adsense: () => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.body.appendChild(script);
    console.log('vendor: adsense loaded!');
  },
  youtube: () => {
    var script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
    console.log('vendor: youtube loaded!');
  }
};

vendor.ga();

if (
  currentPath === '/' ||
  currentPath.search('/ph-covid19-tracker') >= 0
) {
  vendor.adsense();
} 

if (currentPath.search('/ph-covid19-tracker') >= 0) {
  vendor.youtube();
}
