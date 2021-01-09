import React from 'react';
import { tagsEnum } from './tags.js';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function MasonryPost(props) {
	const { post } = props;
	const imageBackground = { backgroundImage: `url(${post.better_featured_image?.source_url})` };
	const style = { ...imageBackground, ...post.style };
	const url = `/app/blog/${post?.id}`;

	return (
		<Link className="masonry-post overlay" style={style} to={url}>
			<div className="image-text">
				<div className="tags-container">
					{post?.tags.length
						? post.tags.map((tag, i) => {
								return (
									<span key={i} className="tag" style={{ backgroundColor: tagsEnum[tag]?.color }}>
										{tagsEnum[tag]?.title}{' '}
									</span>
								);
						  })
						: null}
				</div>
				<div>
					<h2 className="image-title">{post.title?.rendered}</h2>
					<section className="image-date">
						{moment(post?.date).format('MMMM DD, YYYY') || '21 Jan, 2020'}{' '}
					</section>
				</div>
			</div>
		</Link>
	);
}
