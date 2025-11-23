; (function () {

	'use strict';

	const portfolioData = {
		"hero": {
			"name": "Pavitra Raut",
			"title": "Senior Software Engineer",
			"subtitle": "Android | Kotlin | Java",
			"cta": "Initiate Contact"
		},
		"about": {
			"title": "About",
			"image": "images/profile.jpg",
			"summary": "Android Developer with 7+ years of experience building performant, scalable apps using Kotlin, Jetpack Compose, and modern architecture. Proven success leading production-grade development in automotive and edtech sectors.",
			"experience_summary": "Experience of 3+ years results in brief knowledge of Android components, which further helps me to design & deploy stable & maintainable app.",
			"goals": [
				{
					"title": "High Quality Apps",
					"description": "A quality & easy to use app can reach and adopted by millions."
				},
				{
					"title": "Bleeding Edge Tech",
					"description": "Giving a try to the latest technologies is what I've loved."
				},
				{
					"title": "Happy Clients",
					"description": "I take full responsibility so my clients can chill."
				}
			]
		},
		"experience": {
			"title": "Experience",
			"jobs": [
				{
					"company": "Harman | Mercedes-Benz",
					"date": "May 2022 - Present | Bengaluru",
					"role": "Senior Software Engineer",
					"details": [
						{
							"heading": "AMG Team Achievements",
							"items": [
								"Extensive hands-on experience with Jetpack Compose in production-grade application (Mercedes-Benz Stories).",
								"Led the successful migration to Here Maps Explore Edition & Google Maps, significantly enhancing user interaction & visualization for the AMG app.",
								"Collaborated with the Here team to optimize map integration within listings, achieving an impressive 80% performance improvement."
							]
						},
						{
							"heading": "Technical Leadership",
							"items": [
								"Leading the creation of a reusable Map SDK layer enabling seamless switching between different map SDKs.",
								"Elevated code quality by 30% through architectural leadership, ensuring long-term maintainability.",
								"Spearheaded the creation of comprehensive test suites, guaranteeing reliable and robust code functionality.",
								"Exploring KMM with different use cases for feasibility of the implementation.",
								"Delivered innovative solutions for complex implementation challenges, fostering team success."
							]
						}
					]
				},
				{
					"company": "Wonderslate | Prepjoy",
					"date": "August 2019 - April 2022 | Bengaluru",
					"role": "Mobile Software Engineer",
					"details": [
						{
							"heading": "Wonderslate & White Label Apps",
							"items": [
								"Significantly enhanced functionality for Wonderslate and white labels, boosting user engagement and functionality by ~20%."
							]
						},
						{
							"heading": "Technical Innovation",
							"items": [
								"Led the adoption of Kotlin and Multi-module MVVM (Google-recommended architecture) resulting in a 30% reduction in bugs.",
								"Implemented Koin for dependency injection, leading to improved code maintainability and streamlined testing.",
								"Developed core functionalities utilized in 70% of user interactions:",
								"Library: Streamlined access to acquired ebooks and courses.",
								"Cart Feature: Simplified ebook selection and facilitated simultaneous purchases.",
								"Video Playback: Enhanced interactive learning with seamless playback for both \"Livestream\" and \"Recorded\" classes using Exoplayer."
							]
						}
					]
				},
				{
					"company": "Genisys",
					"date": "April 2018 - June 2019 | Surat",
					"role": "Junior Android App Developer",
					"details": [
						{
							"items": [
								"Leveraged newly acquired Android development skills to develop more than 3 small products."
							]
						}
					]
				}
			]
		},
		"skills": {
			"title": "Skills",
			"key_skills": [
				"Jetpack Compose",
				"Kotlin",
				"MVVM (Multi-module)",
				"Android Architecture Components",
				"Koin/Hilt",
				"Coroutines/Flow",
				"Room DB",
				"REST APIs",
				"Google & Here Maps SDK",
				"ExoPlayer",
				"KMM (Exploring)"
			],
			"tech_stack": [
				"images/tech/logo_kotlin.svg",
				"images/tech/logo_java.svg",
				"images/tech/logo_android.svg"
			],
			"tools": [
				"images/tools/logo_android_studio.svg",
				"images/tools/logo_github.svg",
				"images/tools/logo_firebase.svg",
				"images/tools/logo_figma.svg"
			]
		},
		"projects": {
			"title": "Projects",
			"items": [
				{
					"name": "Utkarsh",
					"image": "images/Utkarsh.png",
					"link": "https://play.google.com/store/apps/details?id=com.utkarshnew.android",
					"description": "One-Stop Learning Platform for students preparing for school & competitive exams with 5M+ registered users."
				},
				{
					"name": "Wonderslate",
					"image": "images/Wonderslate.png",
					"link": "https://play.google.com/store/apps/details?id=com.wonderslate.wonderpublish",
					"description": "Redefining the learning experience with eBooks, audiobooks, videos, and interactive quizzes."
				},
				{
					"name": "Giant Square",
					"image": "images/Giant-Square.png",
					"link": "https://play.google.com/store/apps/details?id=mws.photography.ninecutsquaregrid.forinstagram",
					"description": "Giant Square & Grid Maker for Instagram. Split photos, Panorama effects, and more."
				}
			],
			"other_products": [
				{
					"name": "Mercedes-Benz Stories",
					"link": "#"
				},
				{
					"name": "Mercedes-Benz Connect",
					"link": "#"
				},
				{
					"name": "Winners",
					"link": "#"
				},
				{
					"name": "Griddy",
					"link": "#"
				}
			]
		},
		"blog": {
			"title": "Blog",
			"items": [
				{
					"title": "Start with Kotlin?",
					"date": "2 Feb, 2022",
					"image": "images/blog/img-blog-kotlin.png",
					"link": "https://rex50.medium.com/should-you-start-with-kotlin-as-a-beginner-coder-1ea4e9c6169e",
					"description": "Should I recommend learning Kotlin language to beginner coders? Let's find out."
				},
				{
					"title": "Animated Splash Screen",
					"date": "11 Jan, 2021",
					"image": "images/blog/img-blog-animated-splash.png",
					"link": "https://rex50.medium.com/amazing-animated-splash-screen-kotlin-and-lottie-how-to-b98504005abf",
					"description": "How to create an amazing animated splash screen using Kotlin and Lottie."
				},
				{
					"title": "View Binding in 5 mins",
					"date": "2 Apr, 2021",
					"image": "images/blog/img-blog-view-binding.png",
					"link": "https://rex50.medium.com/learn-basic-view-binding-in-5-mins-the-easiest-way-3126da896583",
					"description": "Learn basic View binding in 5 mins, The easiest way!"
				},
				{
					"title": "What is KMM?",
					"date": "17 Oct, 2021",
					"image": "images/blog/img-blog-kmm.png",
					"link": "https://rex50.medium.com/what-is-kmm-is-multiplatform-programming-is-going-to-boom-efddf59059f5",
					"description": "Is Multiplatform programming going to boom? What is KMM and how is it better?"
				}
			]
		},
		"contact": {
			"title": "Transmission",
			"coordinates": {
				"location": "Bengaluru, India",
				"phone": "+91 7016258605",
				"email": "pareshraut50@gmail.com"
			},
			"social": [
				{
					"icon": "icon-instagram2",
					"link": "https://www.instagram.com/rex50.codes/"
				},
				{
					"icon": "icon-twitter2",
					"link": "https://twitter.com/pareshraut50/"
				},
				{
					"icon": "icon-file-text2",
					"link": "https://rex50.medium.com/"
				},
				{
					"icon": "icon-behance",
					"link": "https://www.behance.net/rex50/"
				},
				{
					"icon": "icon-github",
					"link": "https://www.github.com/rex50/"
				}
			]
		}
	};

	// iPad and iPod detection	
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var footer = function () {
		$(".customFooter").load("footer.html");
	}

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function () {

		$('.js-colorlib-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);
			if ($('body').hasClass('menu-show')) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function () {
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 600);
			}
		})
	};

	// Animations

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#colorlib-counter').length > 0) {
			$('#colorlib-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	// Owl Carousel
	var owlCarouselFeatureSlide = function () {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			nav: true,
			dots: false,
			autoHeight: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			},
			navText: [
				"<i class='icon-arrow-left3 owl-direction'></i>",
				"<i class='icon-arrow-right3 owl-direction'></i>"
			]
		});
		var owl3 = $('.owl-carousel3');
		owl3.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			nav: false,
			dots: false,
			autoHeight: true,
			items: 1,
			navText: [
				"<i class='icon-arrow-left3 owl-direction'></i>",
				"<i class='icon-arrow-right3 owl-direction'></i>"
			]
		});
	};



	// Document on load.
	$(function () {
		fullHeight();
		burgerMenu();
		counterWayPoint();
		contentWayPoint();
		// owlCarouselFeatureSlide(); // Moved to after data load

		// Smooth Scrolling
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 50
					}, 1000);
					return false;
				}
			}
		});

		// Close mobile menu on link click
		$('.navbar-nav li a').on('click', function () {
			if ($('.navbar-toggle').css('display') != 'none') {
				$(".navbar-toggle").trigger("click");
			}
		});

		// Theme Toggle
		const themeToggle = document.getElementById('theme-toggle');
		const body = document.body;

		// Check saved theme
		if (localStorage.getItem('theme') === 'light') {
			body.classList.add('light-mode');
		}

		if (themeToggle) {
			themeToggle.addEventListener('click', () => {
				body.classList.toggle('light-mode');
				localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
			});
		}

		// Load Content from JSON
		loadContent(portfolioData);
	});

	function loadContent(data) {
		// Hero
		$('#hero-name').text(data.hero.name).attr('data-text', data.hero.name);
		$('#hero-title').text(data.hero.title);
		$('#hero-subtitle').text(data.hero.subtitle);
		$('#hero-cta').text(data.hero.cta);

		// About
		$('#about-title').text(data.about.title);
		$('#about-image').attr('src', data.about.image).attr('alt', data.hero.name);

		let aboutContent = `<h3>// Summary</h3><p>${data.about.summary}</p>`;
		if (data.about.experience_summary) {
			aboutContent += `<p>${data.about.experience_summary}</p>`;
		}
		aboutContent += `<h3>// Goals</h3>`;
		data.about.goals.forEach((goal, index) => {
			aboutContent += `<p><strong>${index + 1}. ${goal.title}:</strong> ${goal.description}</p>`;
		});
		$('#about-content').html(aboutContent);

		// Experience
		$('#experience-title').text(data.experience.title);
		let experienceHtml = '';
		data.experience.jobs.forEach(job => {
			experienceHtml += `
				<div class="retro-card">
					<h3>${job.company}</h3>
					<span class="date">${job.date}</span>
					<h4>${job.role}</h4>`;

			job.details.forEach(detail => {
				if (detail.heading) {
					experienceHtml += `<p><strong>${detail.heading}:</strong></p>`;
				}
				experienceHtml += `<ul>`;
				detail.items.forEach(item => {
					experienceHtml += `<li>${item}</li>`;
				});
				experienceHtml += `</ul>`;
			});
			experienceHtml += `</div>`;
		});
		$('#experience-list').html(experienceHtml);

		// Skills
		$('#skills-title').text(data.skills.title);
		let skillsHtml = '';
		data.skills.key_skills.forEach(skill => {
			skillsHtml += `<div class="skill-item">${skill}</div>`;
		});
		$('#key-skills-list').html(skillsHtml);

		let techStackHtml = '';
		data.skills.tech_stack.forEach(img => {
			techStackHtml += `<div class="col-xs-4"><img src="${img}" class="img-responsive" style="max-height: 50px; margin: 0 auto;"></div>`;
		});
		$('#tech-stack-list').html(techStackHtml);

		let toolsHtml = '';
		data.skills.tools.forEach(img => {
			toolsHtml += `<div class="col-xs-3"><img src="${img}" class="img-responsive" style="max-height: 40px; margin: 0 auto;"></div>`;
		});
		$('#tools-list').html(toolsHtml);

		// Projects
		$('#projects-title').text(data.projects.title);
		let projectsHtml = '';
		data.projects.items.forEach(project => {
			projectsHtml += `
				<div class="col-md-4 animate-box">
					<div class="retro-card">
						<a href="${project.link}" target="_blank">
							<img src="${project.image}" class="img-responsive" style="margin-bottom: 15px; border: 1px solid var(--neon-green);">
						</a>
						<h3>${project.name}</h3>
						<p>${project.description}</p>
						<a href="${project.link}" target="_blank" class="btn-retro" style="font-size: 1em;">View</a>
					</div>
				</div>`;
		});
		$('#projects-list').html(projectsHtml);

		let otherProductsHtml = '';
		data.projects.other_products.forEach((prod, index) => {
			if (index > 0) otherProductsHtml += ' | ';
			otherProductsHtml += `<a href="${prod.link}">${prod.name}</a>`;
		});
		$('#other-products-list').html(otherProductsHtml);

		// Blog
		$('#blog-title').text(data.blog.title);
		let blogHtml = '';
		data.blog.items.forEach(item => {
			blogHtml += `
				<div class="item">
					<div class="retro-card">
						<a href="${item.link}" target="_blank">
							<img class="img-responsive" src="${item.image}" alt="${item.title}">
						</a>
						<div class="desc">
							<span class="date">${item.date}</span>
							<h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
							<p>${item.description}</p>
						</div>
					</div>
				</div>`;
		});
		$('#blog-list').html(blogHtml);

		// Initialize Owl Carousel after content is loaded
		owlCarouselFeatureSlide();

		// Contact
		$('#contact-title').text(data.contact.title);
		$('#contact-location').text(data.contact.coordinates.location);
		$('#contact-phone').text(data.contact.coordinates.phone);
		$('#contact-email').attr('href', `mailto:${data.contact.coordinates.email}`).text(data.contact.coordinates.email);

		let socialHtml = '';
		data.contact.social.forEach(social => {
			socialHtml += `<a href="${social.link}" target="_blank"><i class="${social.icon}"></i></a>`;
		});
		$('#contact-social').html(socialHtml);

		// Re-trigger waypoints for animations
		setTimeout(() => {
			$.waypoints('refresh');
			contentWayPoint(); // Re-bind waypoints to new elements
		}, 500);

		// Update Navbar Text to match Section Titles
		$('a[href="#home"] span').text("Root");
		$('a[href="#about"] span').text(data.about.title);
		$('a[href="#experience"] span').text(data.experience.title);
		$('a[href="#skills"] span').text(data.skills.title);
		$('a[href="#work"] span').text(data.projects.title);
		$('a[href="#blog"] span').text(data.blog.title);
		$('a[href="#contact"] span').text(data.contact.title);
	}


}());

function validate() {
	var msg = document.getElementById("input-msg");
	var name = document.getElementById("input-name");
	var email = document.getElementById("input-email");

	if (msg.value == "") {
		showMessage("Ohh! you forgot to enter your message");
		msg.focus();
		return;
	}

	if (name.value == "") {
		showMessage("Ohh! you forgot to enter your name");
		name.focus();
		return;
	}

	var emailCheck = /^([A-Za-z0-9_\-\.]{1,})\@([A-Za-z0-9_\-\.]{1,})\.([A-Za-z]{2,4})$/;
	if (email.value == "" || emailCheck.test(email.value) == false) {
		showMessage("Will need your correct E-mail to contact back")
		email.focus();
		return;
	}

	var successColor = "#00E699";
	showMessage("Got your message, will try to reach you within 6 hours 🙂", successColor)
}

function showMessage(msg) {
	var errColor = "#FF4D6A";
	showMessage(msg, errColor)
}

function showMessage(msg, color) {
	removeLastMsg();
	var tag = document.createElement("p");
	tag.id = "form-msg"
	tag.style.color = color;
	var text = document.createTextNode(msg);
	tag.appendChild(text);
	var result = document.getElementById("form-msg-container");
	result.appendChild(tag);
}

function removeLastMsg() {
	var lastChild = document.getElementById("form-msg");
	if (lastChild != null)
		lastChild.remove();
}