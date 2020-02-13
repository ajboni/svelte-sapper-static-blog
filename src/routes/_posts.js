
// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
import fs from 'fs';
import marked from 'marked';
const matter = require('gray-matter');
export let posts = [];
export let tags = [];

let postsFile = fs.readdirSync('./static/posts/');
postsFile.forEach(postFile => {
	const fileContents = fs.readFileSync('./static/posts/' + postFile, 'utf8');
	const matterPost = matter(fileContents, { excerpt: true });
	matterPost.content = marked(matterPost.content)
	matterPost.excerpt = marked(matterPost.excerpt)
	posts.push(matterPost);
});

// Get tag list
tags = flatten(posts.map(a => {
	const arrays = a.data.tags;
	return arrays;
	// return Array.from(new Set([].concat(...arr)));
}));

// Leave only unique tags
tags = tags.filter((v, i, a) => a.indexOf(v) === i);

function flatten(arr) {
	return arr.reduce(function (flat, toFlatten) {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
}