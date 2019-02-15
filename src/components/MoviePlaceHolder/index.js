import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <ContentLoader>
    <rect rx="5" ry="5" width="150" height="400" />
  </ContentLoader>
)

const MoviePlaceHolder = () => (
  <React.Fragment>
    <MyLoader />
    <MyLoader />
    <MyLoader />
    <MyLoader />
    <MyLoader />
    <MyLoader />
    <MyLoader />
    <MyLoader />
    <MyLoader />
  </React.Fragment>
)



export default MoviePlaceHolder;