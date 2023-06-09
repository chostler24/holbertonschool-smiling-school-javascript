document.addEventListener('DOMContentLoaded', function () {
	// testimonials
	$.ajax({
		url: 'https://smileschool-api.hbtn.info/quotes',
		method: 'GET',
		success: function (data) {
			const quotes = data[0];
			const carousel = $('#testimonial');
			data.forEach(function createCard(quote, index) {
				// console.log(quote);
				const item = $('<div>').addClass('carousel-item px-5');
				const helper = $('<div>').addClass('d-flex flex-column align-items-center flex-sm-row col-sm-10 carousel-helper m-md-5');
				const avatar = $('<img>').addClass('rounded-circle carousel-avatar').attr('src', quote['pic_url']).attr('width', '210px');
				// console.log(quote['pic_url'])
				const content = $('<div>').addClass('px-sm-5');
				const text = $('<p>').addClass('px-2 mt-4 mt-md-0').text(quote['text']);
				// console.log(quote['text']);
				const name = $('<p>').addClass('font-weight-bold pl-2 pt-2 mb-1 align-self-start').text(quote['name']);
				const occupation = $('<cite>').addClass('pl-2 align-self-start').text(quote['title']);

				content.append(text, name, occupation);
				helper.append(avatar, content);
				item.append(helper);
				carousel.append(item);

				if (index === 0) {
					item.addClass('active');
					// console.log('active');
				}
			});

			$('#testimonialLoader').remove();
			$('.testimonialCarousel').removeClass('d-none');
		},
		error: function () {
			console.log('Error fetching quotes');
		}
	});

	$.ajax({
		url: "https://smileschool-api.hbtn.info/popular-tutorials",
		type: "GET",
		dataType: "json",
		beforeSend: function () {
			// show loader
		},
		success: function loadContent(data) {
			data.forEach((tutorial) => {
				// console.log(tutorial);
				$('#popular-tutorials-section').append(
					`<div id="tutorial-${tutorial.id}" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 px-" data-slide-to="${tutorial.id}">
					<div class="card border-0">
						<img class="bg-img card-img-top img-fluid" src="${tutorial.thumb_url}">
						<img class="card-img-overlay w-50 mx-auto mt-2" src="images/play.png">
						<div class="card-body px-0">
							<h5>${tutorial.title}</h5>
							<p>${tutorial['sub-title']}</p>
							<div class="d-flex row" style="flex-wrap: nowrap;">
								<img class="mx-3 rounded-circle" src="${tutorial.author_pic_url}" alt="Author image" height="25px">
								<h6 class="purple">${tutorial.author}</h6>
							</div>
							<div class="d-flex row mx-auto">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_off.png" height="15px">
								<p class="purple col ml-auto">${tutorial.duration}</p>
							</div>
						</div>
					</div>
					`
				);
			});

		},
		error: function (jqXHR, textStatus, errorThrown) {
			// handle error response
		},
		complete: function () {
			$('#tutorial-1').addClass('active');
			$('#carousel-popular').attr('data-interval', false);
			$('#carousel-popular').attr('data-ride', 'carousel').find('.carousel-item').removeClass('col-12 col-sm-6 col-md-4 col-lg-3').addClass('col-12 col-md-6 col-lg-4');
			$('#tutorialLoader').remove();
			$('#carousel-popular-controls').removeClass('d-none');
		}
	});

	$.ajax({
		url: "https://smileschool-api.hbtn.info/latest-videos",
		type: "GET",
		dataType: "json",
		beforeSend: function () {
			// show loader
		},
		success: function loadContent(data) {
			data.forEach((video) => {
				// console.log(video);
				$('#latest-tutorials-section').append(
					`<div id="video-${video.id}" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 px-" data-slide-to="${video.id}">
					<div class="card border-0">
						<img class="bg-img card-img-top img-fluid" src="${video.thumb_url}">
						<img class="card-img-overlay w-50 mx-auto mt-2" src="images/play.png">
						<div class="card-body px-0">
							<h5>${video.title}</h5>
							<p>${video['sub-title']}</p>
							<div class="d-flex row" style="flex-wrap: nowrap;">
								<img class="mx-3 rounded-circle" src="${video.author_pic_url}" alt="Author image" height="25px">
								<h6 class="purple">${video.author}</h6>
							</div>
							<div class="d-flex row mx-auto">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_on.png" height="15px">
								<img src="images/star_off.png" height="15px">
								<p class="purple col ml-auto">${video.duration}</p>
							</div>
						</div>
					</div>
					`
				);
			});

		},
		error: function (jqXHR, textStatus, errorThrown) {
			// handle error response
		},
		complete: function () {
			$('#video-1').addClass('active');
			$('#carousel-latest').attr('data-interval', false);
			$('#carousel-latest').attr('data-ride', 'carousel').find('.carousel-item').removeClass('col-12 col-sm-6 col-md-4 col-lg-3').addClass('col-12 col-md-6 col-lg-4');
			$('#latestLoader').remove();
			$('#carousel-latest-controls').removeClass('d-none');
		}
	});
	$.ajax({
		url: "https://smileschool-api.hbtn.info/courses",
		type: "GET",
		success: function (response) {
			const topics = response.topics;
			const sorts = response.sorts;
			topics.forEach(topic => {
				// console.log(topic);
				$('#topicDropDown').append(
					`<li class="dropdown-item">
						<a href="#" class="text-dark" style="text-decoration: none;" onclick="topicSelect(this)">
							${toStandardString(topic)}
						</a>
					</li>`
				);
			});
			sorts.forEach(sort => {
				// console.log(topic);
				$('#sorts').append(
					`<li class="dropdown-item">
						<a href="#" class="text-dark" style="text-decoration: none;" onclick="sortSelect(this)">
							${toStandardString(sort)}
						</a>
					</li>`
				);
			});
	}})
	getCourses();
	$('#search').change(function() {
		getCourses();
	})
})

function getCourses(){
	$('#courseVideos').empty();
	$('#courseVideos').append(`<div class="loader" id="tutorialLoader"></div>`);
	$.ajax({
		url: "https://smileschool-api.hbtn.info/courses",
		type: "GET",
		data: {
			q: $('#search').val(),
			// topic: $('#topic').text(),
			// sort: $('#sort-by').val()
		},
		success: function (response) {
			const courses = response.courses;

			console.log(courses);
			$('#tutorialLoader').remove();
			loadVideos(courses);
		},
		error: function (xhr) {
			console.log(xhr.responseText);
		}
	});
}

function toStandardString(snakeCaseString) {
	let words = snakeCaseString.split('_');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	return words.join(' ');
}

function stars(rating) {
	let stars = '';
	for (let i = 1; i <= 5; i++) {
		if (i < rating) {
			stars += `<img src="./images/star_on.png" height="15px" width="15px">`
		} else {
			stars += `<img src="./images/star_off.png" height="15px" width="15px">`
		}
	}
	return stars;
}

function loadVideos(courses) {
	$('#courseVideos').append(
		`<p class="col-12 mt-3 mb-0" style="color: gray">${courses.length} Videos</p>`
	);
	courses.forEach(video => {
		// console.log(course);
		$('#courseVideos').append(
			`<div class="col-12 col-sm-4 col-md-3 my-3">
				<div>
					<img class="card-img-top" src="${video.thumb_url}" alt="">
					<img class="card-img-overlay play mx-auto mt-1 p-0 w-50" src="images/play.png">
				</div>
				<div class="card-body">
					<h1 class="card-title lead font-weight-bold text-dark">${video.title}</h1>
					<p class="card-text text-secondary">${video['sub-title']}</p>
					<div class="row">
						<img class="rounded-circle ml-3" src="${video['author_pic_url']}" height="25px" width="25px"
							alt="">
						<p class="ml-3 purple">${video.author}</p>
					</div>
					<div class="row align-items-center justify-content-between px-4">
						<div class="row">
							${stars(video.star)}
						</div>
						<p class="purple ml-3 pt-3">${video.duration}</p>
					</div>
				</div>
			</div>
			`
		)
	});
}

function topicSelect(topic) {
	$('#topic').text(topic.textContent);
	getCourses();
};

function sortSelect(sort) {
	$('#sort-by').text(sort.textContent);
	getCourses();
};

function sortBy(courses) {
	if ($('#sort-by').text == 'Most Popular') {
		console.log('Most Popular');
		console.log(courses.sort((a, b) => a.views - b.views));
	}
}
