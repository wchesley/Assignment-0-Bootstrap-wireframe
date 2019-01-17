function show_results() {
    var btn = document.getElementById("search_btn").addEventListener("click", create_results());
    var results_div = document.getElementById("results_box");
    results_div.style.display = "block";
}

function create_results() {
    document.getElementById("links_div").focus();
    var selected = document.getElementsByName("choice");
    selected.forEach(function(choice){
        if(choice.checked === true)
        {
            build_results(choice.innerText);
        }
    });
}

function build_results(choice_value) {
    var indiv_result = document.createElement("div");
    var reustl_html = '<div class="container"><img src="random-one-from-internet-here" alt-txt="its pizza" class="pizza_pic"><p>Found a '+ choice_value +' pizza near you <br> Price: <button>ORDER NOW!</button></p>';
}