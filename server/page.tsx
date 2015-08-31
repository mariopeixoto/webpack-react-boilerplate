import * as React from 'react';
declare var module;

class Layout extends React.Component<any,any> {
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

module.exports = function(req, stats, hot) {
  const assets = stats.assetsByChunkName;
  const publicPath = stats.publicPath;
  var html = React.renderToStaticMarkup(layoutComponent({
    publicPath,
    assets,
    hot
  }));

  return html;
}
