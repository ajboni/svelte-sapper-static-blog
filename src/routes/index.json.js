import { posts, tags } from './_posts.js';

export function get(req, res) {
	let processedPosts = posts;

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	if (req.query.tag) {
		console.log("Filter by tag")
		processedPosts = filterByTag(posts, req.query.tag)
	}

	const sortedPosts = processedPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

	const contents = (sortedPosts.map(post => {
		return {
			...post
		};
	}));

	let result = {
		contents: contents,
		tags: tags
	}

	res.end(JSON.stringify(result));
}

function filterByTag(arr, tag) {
	console.log(tag)
	arr = arr.filter(a => a.data.tags.includes(tag))
	console.log(arr)
	return arr
}