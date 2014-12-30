var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var Component_1 = require('../app/Component_1');
var Component_2 = require('../app/Component_2');

describe("Component_1", function () {

  var instance;

  beforeEach(function () {
    instance = TestUtils.renderIntoDocument(<Component_1 />);
  });
  
  it("Instance is defined", function() {
    expect(instance).toBeDefined();
  });
  
  it("Instance is a composite component", function () {
    expect(TestUtils.isCompositeComponent(instance)).toBeTruthy();
  });

  it("Instance is a Component_1", function () {
    expect(TestUtils.isCompositeComponentWithType(instance, Component_1 )).toBeTruthy();
  });

  it("Instance has two child nodes", function() {
    expect(instance.getDOMNode().children.length).toEqual(2);
    console.log(instance.getDOMNode());
  });

  it("Instance contains a Component_2 child", function(){
    var child = TestUtils.findRenderedComponentWithType(instance, Component_2);
    expect(TestUtils.isCompositeComponentWithType(child, Component_2 )).toBeTruthy();
  });

  it("Instance has expected child nodes", function() {
    expect(instance.getDOMNode().children.length).toEqual(2);
    expect(instance.getDOMNode().children[0].tagName.toLowerCase()).toEqual('p');
    expect(instance.getDOMNode().children[1].tagName.toLowerCase()).toEqual('div');
    expect(instance.getDOMNode().children[1].children.length).toEqual(1);
    expect(instance.getDOMNode().children[1].children[0].tagName.toLowerCase()).toEqual('p');
  });

});
