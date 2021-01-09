import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { SearchOutlined } from '@material-ui/icons';

const SearchBox = ({ onChange, value }) => {
	return (
		<span className="search-container">
			<input className="search-box" type="search" placeholder="Search Blog" onChange={onChange} value={value} />
			<span>
				<IconButton disabled={true}>
					<SearchOutlined />
				</IconButton>
			</span>
		</span>
	);
};
export default SearchBox;

SearchBox.defaultProps = {
	styleName: '',
	value: '',
};
