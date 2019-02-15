const PriceHelper = (rating) => {
  if(rating < 3) {
    return 3500;
  } else if (rating < 7 && rating >= 3) {
    return 8250;
  } else if (rating > 7 && rating < 9){
    return 16350;
  }
  return 21250;
};

export default PriceHelper;