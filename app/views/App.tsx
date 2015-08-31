import * as React from 'react';
import * as Router from 'react-router';

var RouteHandler = Router.RouteHandler;

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
          <RouteHandler/>
      </div>
    );
  }
}

export default App;
