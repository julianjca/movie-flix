import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <ContentLoader>
    <rect rx="5" ry="5" width="150" height="400" />
  </ContentLoader>
)

const PlaceHolderList = [
  'pc1',
  'pc2',
  'pc3',
  'pc4',
  'pc5',
  'pc6',
  'pc7',
  'pc8',
  'pc9',
]
const MoviePlaceHolder = () => (
  <React.Fragment>
    {
      PlaceHolderList.map((item)=>{
        return <MyLoader key={item} />
      })
    }
  </React.Fragment>
)



export default MoviePlaceHolder;