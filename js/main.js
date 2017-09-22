jQuery(document).ready(function($){
	console.log("js is twerking");
	//console.log("The whole world hates ie, Stop using it! -__-"); 

	// Smooth Scrolling on all local anchor links 
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	}); 


	// Modal open & Close spaghetti version 
	$(function() {
		$(".modal__close").click(function(){
			$(".modal").removeClass("show-me"); 
			$(".modal").addClass("hide-me");
			//$(".modal").addClass("show-me"); 
			
			$(".modal iframe").removeClass("show-me");
			$(".modal iframe").addClass("hide-me");   
			$(".modal iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
			
			$("body").removeClass("modal--opened"); 
		});

		$(".visual-lead__play-btn").click(function(){
			//this.preventDefault();
			$(".modal").removeClass("hide-me"); 
			$(".modal").addClass("show-me"); 
			
			$(".modal iframe").removeClass("hide-me");
			$(".modal iframe").addClass("show-me"); 
			
			$("body").addClass("modal--opened"); 
		}); 
	}); 


	// Mobile/Ham burger Menu Transition 
	function MobileMenu(){

		this.siteHeader = $('.site-header'); // header tag
		this.menuIcon = $(".site-header__menu-icon"); // ham menu
		//this.menuContent = $('.site-header__menu-content'); // nothing
		this.siteHeaderLinks = $('.site-header__main-menu__links'); // all links in header tag
		this.siteHeaderLogo = $('.site-header__logo'); // all links in header tag

		this.events = function(){
			this.menuIcon.click(this.toggleTheMenu.bind(this)); 
			this.siteHeaderLinks.click(this.clearMenu.bind(this)); 
			this.siteHeaderLogo.click(this.clearMenu.bind(this)); 
		}

		this.toggleTheMenu = function(){
			//this.menuContent.toggleClass('site-header__menu-content--is-visible');  
			this.siteHeader.toggleClass('site-header--is-expanded'); 
			this.menuIcon.toggleClass('site-header__menu-icon--close-x');
		}

		this.clearMenu = function(){
			this.siteHeader.removeClass('site-header--is-expanded');
			this.menuIcon.removeClass('site-header__menu-icon--close-x');
		}
		this.events(); 
	}

	var levelupMenu = new MobileMenu; 





});