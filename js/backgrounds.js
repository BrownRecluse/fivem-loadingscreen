<!-- Array of loading screens -->
			var images = 
			[
				"img/0.jpg",
				"img/1.jpg",
				"img/2.jpg",
				"img/3.jpg",
				"img/4.jpg",
				"img/5.jpg",
				"img/6.jpg",
				"img/7.jpg",
				"img/8.jpg",
				"img/9.jpg",
				"img/10.jpg",
				"img/11.jpg",
				"img/12.jpg",
				"img/13.jpg",
				"img/14.jpg",
				"img/15.jpg",
				"img/16.jpg",
				"img/17.jpg",
				"img/18.jpg",
				"img/19.jpg",
				"img/20.jpg",
				"img/21.jpg",
				"img/22.jpg",
				"img/23.jpg",
				"img/24.jpg",
				"img/25.jpg",
				"img/26.jpg",
				"img/27.jpg",
				"img/28.jpg",
				"img/29.jpg",
				"img/30.jpg",
				"img/31.jpg",
				"img/32.jpg",
				"img/33.jpg"
			];
			<!-- End array -->
			<!-- Loop to put the loading screens into random order -->
			for (var i = images.length - 1; i >= 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = images[i];
			images[i] = images[j];
			images[j] = temp;
			}
			<!-- End loop -->
			<!-- Pass the array to backstretch to display -->
			$.backstretch(images,{duration: 4400, fade: 1500});
			$(document).ready(function() {});