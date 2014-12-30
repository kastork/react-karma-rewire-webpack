var React = require('react/addons');
var Component_2 = require('./Component_2');

var Component_1 = React.createClass({

  render: function () {
    return(
    	<div className="ui segment">
    		<p>I am component 1</p>
    		<Component_2 />
    	</div>
    );
  }

});

module.exports = Component_1;
