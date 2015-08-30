'use strict';
import React from 'react';

class Layout extends React.Component {
  render() {
    let hotUpdate;
    if (this.props.hot) {
      hotUpdate = (<script src={this.props.publicPath + 'devClient.js' }></script>);
    }

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Webpack React Boilerplate</title>
          <meta name='viewport' content='width=device-width' />
          <link rel='' />
        </head>
        <body>
          <div id='app'></div>
          <script src={this.props.publicPath + this.props.assets.client}></script>
          {hotUpdate}
        </body>
      </html>
    );
  }
}

let layoutComponent = React.createFactory(Layout);

export default function(req, stats, hot) {
  const assets = stats.assetsByChunkName;
  const publicPath = stats.publicPath;
  var html = React.renderToStaticMarkup(layoutComponent({
    publicPath,
    assets,
    hot
  }));

  return html;
}
