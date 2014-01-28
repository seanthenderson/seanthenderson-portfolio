$(document).ready(function() {
	$(".circle").click(function() {
		if ($(window).width() > 1100) {
			$(".circle").addClass('box_rotate box_transition');
			$("#circles").animate({'margin-right': '-3000px'}, 2000, function() {
				$("#circles").hide();
			}); 
			$(".small-circle").addClass('box_rotateII box_transitionII');
			$("#small-circles").animate({'margin-right': 0}, 3500, function() {
				$(".small-circle").removeClass('box_transitionII');					
			});
		} else {
			$("#circles").hide();
			$("#small-circles").fadeIn().css({'margin-right': 0});
		}
	});
	$(".about").click(function() {
		$(".about").css({'background': '#E46420', 'color':'#F1F0ED'});
		$(".small-about").css({'background': '#E46420', 'color':'#F1F0ED'});
		$(".work").css({'background': '#F1F0ED', 'color': '#3B5472'});
		$(".contact").css({'background': '#F1F0ED', 'color': '#608B81'});
		$("#work-samples").fadeOut(1000);
		if ($(window).width() > 1100) {	
			$("#about-section").delay(2500).fadeIn(1000);
		} else {
			$("#about-section").fadeIn();
		}
		$(".green-background-circle").delay(2500).animate({'opacity': '0.8'}, 2000);
		$(".blue-background-circle").delay(2500).animate({'opacity': '0.8'}, 3000);
		$(".orange-background-circle").delay(2500).animate({'opacity': '0.8'}, 4000);
	});
	$(".work").click(function() {
		$(".about").css({'background': '#F1F0ED', 'color':'#E46420'});
		$(".work").css({'background': '#3B5472', 'color': '#F1F0ED'});
		$(".small-work").css({'background': '#3B5472', 'color': '#F1F0ED'});
		$(".contact").css({'background': '#F1F0ED', 'color': '#608B81'});
		if ($(window).width() > 1100) {
			$("#work-samples").delay(2500).fadeIn(2000);
		} else {
			$("#work-samples").fadeIn();
		}
	});
	$(".contact").click(function() {
		$(".about").css({'background': '#F1F0ED', 'color':'#E46420'});
		$(".work").css({'background': '#F1F0ED', 'color': '#3B5472'});
		$(".contact").css({'background': '#608B81', 'color': '#F1F0ED'});
		$(".small-contact").css({'background': '#608B81', 'color': '#F1F0ED'});
		$("#work-samples").fadeOut(2000);
		if ($(window).width() > 1100) {
			$("#contact-section").delay(2500).fadeIn(1000);
		} else {
			$("#contact-section").fadeIn();
		}
	});
	$(".small-work").click(function() {
		$("#work-samples").delay(550).fadeIn(500);
		$("#about-section").fadeOut(500);
		$("#contact-section").fadeOut(500);
		$(".small-work").css({'background': '#3B5472', 'color': '#F1F0ED'});
		$(".small-about").css({'background': '#F1F0ED', 'color':'#E46420'});
		$(".small-contact").css({'background': '#F1F0ED', 'color': '#608B81'});
	});
	$(".small-about").click(function() {
		$("#work-samples").fadeOut(500);
		$("#contact-section").fadeOut(500);
		$("#about-section").delay(550).fadeIn(500);
		$(".small-work").css({'background': '#F1F0ED', 'color': '#3B5472'});
		$(".small-about").css({'background': '#E46420', 'color':'#F1F0ED'});
		$(".small-contact").css({'background': '#F1F0ED', 'color': '#608B81'});
	});
	$(".small-contact").click(function() {
		$("#work-samples").fadeOut(500);
		$("#about-section").fadeOut(500);
		$("#contact-section").delay(550).fadeIn(500);
		$(".small-work").css({'background': '#F1F0ED', 'color': '#3B5472'});
		$(".small-about").css({'background': '#F1F0ED', 'color':'#E46420'});
		$(".small-contact").css({'background': '#608B81', 'color': '#F1F0ED'});
	});
});