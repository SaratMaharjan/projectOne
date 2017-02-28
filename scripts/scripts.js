
$(function(){

	//var aniHtml = "snippets/animation.html";
	//$ajaxUtils.sendGetRequest( aniHtml, function (responseText) {
		//document.querySelector("#placeholder2").innerHTML = responseText;
	//},
	//false);
	//startAnim();

	$("#headerPlaceholder").load("include/header.html");
	$("#sidebarPlaceholder").load("include/sidebar.html");
	$("#footerPlaceholder").load("include/footer.html");

	var addItems = function(){
		for ( var key in items ){
			$("#mainContent").append(
				"<div class='col-lg-4 col-md-4 col-sm-6 col-xs-9 item'>"+
				"<div class='imgContainer'>"+
					"<div class='dummy'></div>"+
					"<div><img src='" +
						items[key].image +
					"'></img></div>" +
				"</div>"+
				"<div>" + items[key].name + "</div>" +
				"</div>"
			);
		}
	};
	addItems();

});

