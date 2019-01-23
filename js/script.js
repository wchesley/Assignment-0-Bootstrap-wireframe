function show_results() {
    var results_div = document.getElementById("results_box");
    results_div.style.display = "block";
    var search_div = document.getElementById("search_box");
    search_div.style.display = "none";
    //create_results(); still in dev...
}
/*****for Dev branch, untested code **************************
function create_results() {
    document.getElementById("results_box").focus();
    var selected = document.getElementsByName("choice");
    for (var choice in selected)
    {
        build_results(choice); 
    }
}

function build_results(choice_value) {
    var indiv_result = document.createElement("div");
    var result_html = document.createTextNode('<div class="container result-group" id="links_div"><img src="img/Pizza-icon.jpg" class="pizza-icon" alt="Pizza!"><p class="pizza-desc">' + choice_value + ' Pizza was foun in your area! </p><label class="price-lbl">Price: $$</label><button class="order-btn">Order Now!</button></div>');
    var result_box = document.getElementById("results_box");
    indiv_result.appendChild(result_html);
    result_box.appendChild(indiv_result);
    return;
}
*/