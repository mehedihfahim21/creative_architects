$(document).ready(function(){$('.js--team-section').waypoint(function(direction){if(direction=='down'){$('nav').addClass('sticky');}else{$('nav').removeClass('sticky');}});$("nav ul li a").click(function(){$("nav ul li a").removeClass("active"),$(this).addClass("active");}),$("nav a h3").click(function(){$("nav ul li a").removeClass("active"),$("nav ul li:first-child a").addClass("active");});$("a").on("click",function(a){if(""!==this.hash){a.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},200,function(){window.location.hash=t;});}});var mixer=mixitup('.grid-portfolio-container');});function openMenu(){document.getElementById('navBar').style.width="100%";} function closeMenu(){document.getElementById('navBar').style.width="0%";}