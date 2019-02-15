const ColorHelper = (rating) => {
  if(rating < 3){
    return '#f88'
  } else if(rating < 7) {
    return '#FFFF66'
  }
  return '#7FFF00'
}

export default ColorHelper;