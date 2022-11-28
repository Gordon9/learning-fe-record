"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e2 = React.createElement;

var DislikeButton = function (_React$Component) {
  _inherits(DislikeButton, _React$Component);

  function DislikeButton(props) {
    _classCallCheck(this, DislikeButton);

    var _this = _possibleConstructorReturn(this, (DislikeButton.__proto__ || Object.getPrototypeOf(DislikeButton)).call(this, props));

    _this.state = { disliked: false };
    return _this;
  }

  _createClass(DislikeButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.disliked) {
        return "You disliked this.";
      }

      return e2("button", { onClick: function onClick() {
          return _this2.setState({ disliked: true });
        } }, "Dislike");
    }
  }]);

  return DislikeButton;
}(React.Component);

var domContainer2 = document.querySelector("#dislike_button_container");
var root2 = ReactDOM.createRoot(domContainer2);
root2.render(e2(DislikeButton));