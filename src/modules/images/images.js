const importAll = (context) => {
    return context.keys().map(context);
  };
  
  const sportImages = importAll(require.context('../../images/sport', false, /\.(png|jpe?g|svg)$/));
  
  const images = [
    {
      category: 'Sports',
      images: sportImages
    },
    // Add more category objects as needed
  ];
  
  export default images;
  