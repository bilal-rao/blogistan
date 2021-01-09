import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from 'components/Search';

class Layout extends React.Component {
	render() {
		const { isPostCard, children } = this.props;
		return (
			<div className="viewport">
				<div className="viewport-top">
					<header className="site-head">
						<div className="container">
							<Link to="/">
								<img alt="Blogistan" src={require('assets/images/blog.png')} />
							</Link>
							{!isPostCard ? (
								<SearchBox
									onChange={(ev) => this.props.searchBlog(ev.target.value)}
									value={this.props.query}
								/>
							) : null}
						</div>
					</header>

					<main className="site-main">{children}</main>
				</div>

				<div className="viewport-bottom">
					<footer className="bottom-nav">
						<div className="container">
							{' '}
							<div className="bottom-nav-nav">
								<div className="bottom-nav-nav-left">Copyright Blogistan © 2021</div>
							</div>{' '}
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default Layout;
