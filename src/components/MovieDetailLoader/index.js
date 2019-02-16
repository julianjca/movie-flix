import React from 'react'
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
	<ContentLoader
		rtl
		height={300}
		width={600}
		speed={2}
		primaryColor="#c6c5c7"
		secondaryColor="#d2d1d3"
		{...props}
	>
		<rect x="367.92" y="52.61" rx="0" ry="0" width="174.28" height="208.62" />
		<rect x="119.92" y="56.61" rx="0" ry="0" width="221.8" height="70.11" />
		<rect x="238.27" y="136.15" rx="0" ry="0" width="102.07" height="15.39" />
		<rect x="118.92" y="161" rx="0" ry="0" width="223.37" height="99.18" />
		<rect x="410.92" y="13.61" rx="0" ry="0" width="130" height="21" />
		<rect x="420.92" y="133.61" rx="0" ry="0" width="0" height="0" />
		<rect x="409.92" y="146.61" rx="0" ry="0" width="0" height="0" />
	</ContentLoader>
);

export default MyLoader;