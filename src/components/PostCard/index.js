import React from 'react';
import ArrowIcon from '@material-ui/icons/ArrowForwardOutlined';
import { Link } from 'react-router-dom';

class PostCard extends React.Component {
	render() {
		const { post } = this.props;
		const url = `/app/blog/${post?.id}`;

		return (
			<Link to={url} className="post-card">
				<header className="post-card-header">
					{post.better_featured_image.source_url && (
						<div
							className="post-card-image"
							style={{
								backgroundImage: `url(${post.better_featured_image.source_url})`,
							}}
						></div>
					)}
					<h2 className="post-card-title">{post.title?.rendered}</h2>
				</header>
				<section className="post-card-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }} />
				<footer className="post-card-footer">
					<div className="post-card-footer-right">
						<p className="link-style">
							Read Full Blog <ArrowIcon />
						</p>
					</div>
				</footer>
			</Link>
		);
	}
}

export default PostCard;
