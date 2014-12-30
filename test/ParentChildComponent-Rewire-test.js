var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var rewire = require("rewire");
var rewireModule = require("./rewireModule");

var Component_1 = rewire('../app/Component_1');
var Component_2 = require('../app/Component_2');

describe("Rewired Component_1", function () {
  
  var instance;
  
  rewireModule(Component_1, {
    Component_2: React.createFactory('div')
  });

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
    console.log(instance.getDOMNode());
  });

  it("Instance has expected child nodes", function() {
    expect(instance.getDOMNode().children.length).toEqual(2);
    expect(instance.getDOMNode().children[0].tagName.toLowerCase()).toEqual('p');
    expect(instance.getDOMNode().children[1].tagName.toLowerCase()).toEqual('div');
    expect(instance.getDOMNode().children[1].children.length).toEqual(0);
  });

});
