
// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
import fs from 'fs';
import marked from 'marked';
const matter = require('gray-matter');
let posts = [];


// import path from 'path';
// import marked from 'marked';
// import yaml from 'js-yaml';

let postsFile = fs.readdirSync('./static/posts/');
postsFile.forEach(postFile => {
	const fileContents = fs.readFileSync('./static/posts/' + postFile, 'utf8');
	const matterPost = matter(fileContents, { excerpt: true });
	matterPost.content = marked(matterPost.content)
	matterPost.excerpt = marked(matterPost.excerpt)
	posts.push(matterPost);
});
// posts.forEach(post => {
// 	post.html = post.html.replace(/^\t{3}/gm, '');
// });

export default posts;
