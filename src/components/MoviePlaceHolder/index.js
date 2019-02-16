import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = props => (
	<ContentLoader
		height={400}
		width={600}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
		{...props}
	>
		<rect x="420.92" y="133.61" rx="5" ry="5" width="0" height="0" />
		<rect x="4092" y="146.61" rx="5" ry="5" width="0" height="0" />
		<rect x="149.95" y="10" rx="5" ry="5" width="89.04" height="150" />
		<rect x="253.85" y="11.27" rx="5" ry="5" width="89.04" height="150" />
		<rect x="356.99" y="11.27" rx="5" ry="5" width="89.04" height="150" />
		<rect x="50.13" y="166.61" rx="5" ry="0" width="89.04" height="150" />
		<rect x="149.95" y="166.61" rx="5" ry="5" width="89.04" height="150" />
		<rect x="253.85" y="166.61" rx="5" ry="5" width="89.04" height="150" />
		<rect x="356.99" y="166.61" rx="5" ry="5" width="89.04" height="150" />
		<rect x="50.13" y="11.27" rx="5" ry="5" width="89.04" height="150" />
		<rect x="454.5" y="11.27" rx="5" ry="5" width="89.04" height="150" />
		<rect x="454.5" y="166.61" rx="5" ry="5" width="89.04" height="150" />
	</ContentLoader>
)


export default MyLoader;