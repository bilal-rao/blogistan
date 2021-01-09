import React from 'react';
import  MasonryPost  from './masoneryPost';

export default function PostMasonry({ blogs, coulumns, tagsOnTop }) {
	return (
		<section className="masonry" style={{ gridTemplateColumns: `repeat(${coulumns}, minmax('275px', '1fr')})` }}>
			{blogs?.map((post, index) => (
				<MasonryPost {...{ post, index, tagsOnTop, key: index }} />
			))}
		</section>
	);
}
