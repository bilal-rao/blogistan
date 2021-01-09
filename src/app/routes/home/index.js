import React from 'react';

import { connect } from 'react-redux';
import memoize from 'memoize-one';
import { NotificationManager, NotificationContainer } from 'react-notifications';

//components
import Layout from 'components/Layout/index';
import MasonryHeader from 'components/Masonry/index';
import Error404 from 'components/Error404';
import Loader from 'components/Loader/index';
import NewsFeed from 'components/PostCard/index';

//Actions
import * as postActions from 'actions/Post';

//Error Message
let isMessageShow = false;

class Home extends React.Component {
	state = {
		query: '',
		trendingPosts: [],
		allPosts: [],
	};

	componentDidMount() {
		this.props.showLoader();
		this.props.fetchPosts();
	}

	filter = memoize((list, query) =>
		list?.filter((item) => item.title.rendered.toLowerCase().includes(query.toLowerCase()))
	);

	handleChange = (query) => {
		this.setState({ query });
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.allPosts.length !== prevState.allPosts.length) {
			return { allPosts: nextProps.allPosts, trendingPosts: nextProps.allPosts.slice(0, 3) };
		}
		if (nextProps.isMessage && !isMessageShow) {
			isMessageShow = true;

			setTimeout(() => {
				nextProps.hideMessage();
				isMessageShow = false;
			}, 1000);
		} else return null;
	}

	render() {
		const { allPosts, trendingPosts } = this.state;
		const { loader, isMessage, alertMessage } = this.props;
		const filteredList = this.filter(allPosts, this.state.query);

		return (
			<Layout isPostCard={false} searchBlog={this.handleChange} query={this.state.query}>
				<div className="container">
					{/* Featured Post Start */}
					<MasonryHeader trending={trendingPosts} />
					{/* Featured Post End */}

					{/* Main Section Start */}
					{!loader ? (
						filteredList?.length ? (
							<section className="post-feed">
								{filteredList.map((item, index) => (
									<NewsFeed key={index} history={this.props.history} post={item} />
								))}
							</section>
						) : (
							<Error404 />
						)
					) : (
						<Loader />
					)}

					{/* Main Section End */}

					{isMessage && NotificationManager.error(alertMessage)}
					<NotificationContainer />
				</div>
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		allPosts: state.postData.posts?.data || [],
		loader: state.postData.loader,
		isMessage: state.postData.showMessage,
		alertMessage: state.postData.alertMessage,
	};
}

export default connect(mapStateToProps, {
	...postActions,
})(Home);
