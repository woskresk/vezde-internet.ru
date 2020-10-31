$(document).ready(function(){$("a[href*='#']").on("click",function(e){
	var o=$(this);
	return $("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},777),e.preventDefault(),!1})}),

$(document).ready(function(){$(".carouselportfolio").owlCarousel({responsive:{0:{items:1},750:{items:2},1e3:{items:3}}}),
$(".carouselotziv").owlCarousel({items:1,dots:!0})});

var option={offset:500},header=new Headhesive(".navbar","option");

// function inituser(){var t=$map,o=[59.939095,30.315868],n=window.map=new ymaps.Map("map",{center:o,zoom:10,behaviors:["default"]});
// search=new ymaps.control.SearchControl({useMapBounds:!0,noPlacemark:!0}),
// console.log(n),n.controls.add(search),n.controls.add("zoomControl"),n.controls.add("mapTools"),
// n.controls.add("typeSelector"),n.controls.add("scaleLine"),n.cursors.push("crosshair");

// function r(e){e!=o&&($lat=$map.find(".coord").find(".lat").html(e[0]+"&#176;"),
// 	$lon=$map.find(".coord").find(".lon").html(e[1]+"&#176;"),
// 	$(".address").val(t.placemark.properties.get("balloonContent")),
// 	$("input[name=inpcoordslat]").val(e[0]),
// 	$("input[name=inpcoordslon]").val(e[1]))}
// function a(e){var a;t.placemark?(t.placemark.geometry.setCoordinates(e),t.placemark.properties.set(e)):(t.placemark=new ymaps.Placemark(e,{hintContent:""},{iconImageHref:"img/flag.png",iconImageSize:[150,61],iconImageOffset:[-70,-60],draggable:!1}),n.geoObjects.add(t.placemark)),a=e,ymaps.geocode(a).then(function(e){var o=e.geoObjects.get(0);
// 	t.placemark.properties.set({balloonContent:o.properties.get("name")}),n.setCenter(a),r(a)})}a(o),r(o),search.events.add("resultselect",function(e){var o=search.getResultsArray()[e.get("resultIndex")].geometry.getCoordinates();a(o),r(o)}),n.events.add("click",function(e){var o=e.get("coordPosition").map(function(e){return e.toPrecision(8)});
// 	a(o),r(o)})}$map=$("#map"),0<$map.length&&ymaps.ready(inituser),$("#myModal").modal(options),
// $(function(){$("#phone1, #phone2, #phone3, #phone4").mask("+7(999)999-9999")});