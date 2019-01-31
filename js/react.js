var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";

var root = document.getElementById("root");

var TEST_data = {
    Pizza: [{
        id: 0,
        flavor: "Cheeze",
        price: 5.99,
        location: "restaurant.exe"
    }, {
        id: 1,
        flavor: "Pepperoni",
        price: 8.99,
        location: "Pizza Planet"
    }, {
        id: 2,
        flavor: "Supreme",
        price: 11.99,
        location: "Pizza Hutt"
    }]
};

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "container" },
                React.createElement(NavBar, null),
                React.createElement(
                    "div",
                    { "class": "banner jumbotron text-center", style: "background-color: #F5525D; padding-top:6vw;" },
                    React.createElement(
                        "h1",
                        null,
                        "It's PIZZA Time! "
                    ),
                    React.createElement(
                        "p",
                        { "class": "sub_banner" },
                        "Find the lowest pricest pizza near you! Some Change?"
                    )
                ),
                React.createElement(SearchBox, null),
                React.createElement(ZipBox, null)
            );
        }
    }]);

    return Header;
}(Component);

var NavBar = function (_Component2) {
    _inherits(NavBar, _Component2);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        "Home"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "sign_up.html" },
                        "Sign Up"
                    )
                )
            );
        }
    }]);

    return NavBar;
}(Component);

//To be filled with pizza Types


var SearchBox = function (_Component3) {
    _inherits(SearchBox, _Component3);

    function SearchBox() {
        _classCallCheck(this, SearchBox);

        return _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).apply(this, arguments));
    }

    _createClass(SearchBox, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "search_box", "class": "col-6 mx-auto main_div" },
                React.createElement(
                    "div",
                    { "class": "custom-control custom-checkbox" },
                    React.createElement(PizzaType, null)
                )
            );
        }
    }]);

    return SearchBox;
}(Component);

var PizzaType = function (_Component4) {
    _inherits(PizzaType, _Component4);

    function PizzaType() {
        _classCallCheck(this, PizzaType);

        return _possibleConstructorReturn(this, (PizzaType.__proto__ || Object.getPrototypeOf(PizzaType)).apply(this, arguments));
    }

    _createClass(PizzaType, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "custom-control custom-checkbox" },
                React.createElement("input", { type: "checkbox", "class": "custom-control-input", id: "choice_chz" })
            );
        }
    }]);

    return PizzaType;
}(Component);
/*
PizzaType.PropTypes = {
    id:
    flavor:
    price:
    location:
}
*/

var ZipBox = function (_Component5) {
    _inherits(ZipBox, _Component5);

    function ZipBox() {
        _classCallCheck(this, ZipBox);

        return _possibleConstructorReturn(this, (ZipBox.__proto__ || Object.getPrototypeOf(ZipBox)).apply(this, arguments));
    }

    _createClass(ZipBox, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "container" },
                React.createElement(
                    "label",
                    { "for": "search_zip" },
                    "Please Enter Zip Code:"
                ),
                React.createElement("input", { "class": "zip_box", id: "search_zip", type: "text" }),
                React.createElement(
                    "button",
                    { "class": "search_btn", id: "search_btn", onclick: FoundPizza },
                    "Search"
                )
            );
        }
    }]);

    return ZipBox;
}(Component);

var FoundPizza = function (_Component6) {
    _inherits(FoundPizza, _Component6);

    function FoundPizza() {
        _classCallCheck(this, FoundPizza);

        return _possibleConstructorReturn(this, (FoundPizza.__proto__ || Object.getPrototypeOf(FoundPizza)).apply(this, arguments));
    }

    _createClass(FoundPizza, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "col-9 mx-auto result", id: "results_box" },
                React.createElement(
                    "div",
                    { "class": "container result-group", id: "links_div" },
                    React.createElement("img", { src: "img/Pizza-icon.jpg", "class": "pizza-icon", alt: "Pizza!" }),
                    React.createElement(
                        "p",
                        { "class": "pizza-desc" },
                        "Pizza was found in your area! ",
                        React.createElement("br", null),
                        "Provided by: Company X"
                    ),
                    React.createElement(
                        "label",
                        { "class": "price-lbl" },
                        "Price: $$"
                    ),
                    React.createElement(
                        "button",
                        { "class": "order-btn", id: "order", onclick: "location.href='order.html';" },
                        "Order Now!"
                    )
                )
            );
        }
    }]);

    return FoundPizza;
}(Component);

ReactDOM.render(React.createElement(Header, null), root);