require("./style.less");

var React = require('react/addons');
var Component_1 = require('./Component_1');
var Component_2 = require('./Component_2');

var App = React.createClass({

  render: function() {
    return (
        <div className="ui segment">
      <div className="ui page grid">
        <h1 className="ui center aligned header">
          Demo
        </h1>
        <div className="ui sixteen wide column">
          <Component_1 />
        </div>
      </div>
      </div>
    );
  }
});

React.render(<App/>, document.body);

