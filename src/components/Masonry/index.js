import React from 'react';
import BlogMasonry from './blog.js';

const trendingConfig = {
	0: {
		gridArea: '1 / 2 / 3 / 3',
	},
};

const combineStyles = function(posts, config) {
	posts.forEach((post, index) => {
		post.style = config[index];
	});
};

export default function Index({ trending }) {
	combineStyles(trending, trendingConfig);

	return (
		<section className="masonry-container home">
			<div className="row">
				<h2>Trending Blogs</h2>
				<BlogMasonry blogs={trending} columns={3} tagsOnTop history="" />
			</div>
		</section>
	);
}
