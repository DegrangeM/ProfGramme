self.addEventListener('install', (event) => {
	event.waitUntil(
	  caches.open('ProfGramme').then((cache) => {
		return cache.addAll([
			'./',
			'./index.html',
			'./main.css',
			'./jqueryui/jquery-ui.css',
			'./jqueryui/external/jquery/jquery.js',
			'./jqueryui/jquery-ui.js',
			'./example.js',
			'./source.js',
			'./ui.js',
			'./main.js',
			'./logo.svg',
		]);
	  })
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		fetch(event.request).catch(function() {
			return caches.match(event.request);
		})
	);
});

/*
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
		return response || fetch(event.request);
		})
	);
});
*/