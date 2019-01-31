import React, { Component } from "react";


const root = document.getElementById("root");

const TEST_data = {
    Pizza: [
        {
            id: 0,
            flavor: "Cheeze", 
            price: 5.99,
            location: "restaurant.exe"
        },
        {
            id:1,
            flavor: "Pepperoni",
            price: 8.99, 
            location: "Pizza Planet"
        },
        {
            id:2,
            flavor: "Supreme",
            price: 11.99, 
            location: "Pizza Hutt"
        }
    ]
}

class Header extends Component {
    render() {
        return(
        <div class="container">
        <NavBar />
        <div class="banner jumbotron text-center" style="background-color: #F5525D; padding-top:6vw;">
            <h1>It's PIZZA Time! </h1>
            <p class="sub_banner">Find the lowest pricest pizza near you! Some Change?</p>
        </div>
        <SearchBox />
        <ZipBox />
        </div>
        );
    }
}

class NavBar extends Component {
    render() {
        return(
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="sign_up.html">Sign Up</a></li>
        </ul>
        );
    }
}

//To be filled with pizza Types
class SearchBox extends Component {
    render() {
        return(
        <div id="search_box" class="col-6 mx-auto main_div">
            <div class="custom-control custom-checkbox">
            <PizzaType />
            </div> 
        </div> 
        );
    }
}

class PizzaType extends Component {
    render() {
        return(
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="choice_chz" />
            </div>
        );
    }
}
/*
PizzaType.PropTypes = {
    id:
    flavor:
    price:
    location:
}
*/

class ZipBox extends Component {
    render() {
        return(
        <div class="container">
            <label for="search_zip">Please Enter Zip Code:</label>
            <input class="zip_box" id="search_zip" type="text" />
            <button class="search_btn"id="search_btn" onclick={FoundPizza}>Search</button>
        </div>
        );
    }
}

class FoundPizza extends Component {
    render() {
        return(
        <div class="col-9 mx-auto result"  id="results_box">
            <div class="container result-group" id="links_div">
                <img src="img/Pizza-icon.jpg" class="pizza-icon" alt="Pizza!" />
                <p class="pizza-desc">Pizza was found in your area! <br />Provided by: Company X</p>
                <label class="price-lbl">Price: $$</label>
                <button class="order-btn" id="order" onclick="location.href='order.html';">Order Now!</button>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<Header />, root);