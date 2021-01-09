import React from 'react';
import { connect } from 'react-redux';
import * as postActions from 'actions/Post';
import Layout from 'components/Layout/index';

class Post extends React.Component {
	componentDidMount() {
        let id = this.props.location.pathname.split('/').reverse()[0];
        this.props.showLoader();
        this.props.fetchIndividualPost({id});
	}

	render() {
		const { post } = this.props;
		return (
			<Layout isPostCard={true}>
				<div className="container">
					<article className="content">
						{post.better_featured_image?.source_url ? (
							<figure className="post-feature-image">
								<img src={post.better_featured_image?.source_url} alt={post.better_featured_image?.alt_text || ''} />
							</figure>
						) : null}
						<section className="post-full-content">
							<h1 className="content-title">{post.title?.rendered}</h1>

							<section
								className="content-body load-external-scripts"
								dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
							/>
						</section>
					</article>
				</div>
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.postData.individualPostData?.data || {},
	};
}

export default connect(mapStateToProps, {
    ...postActions
})(Post);
