const importAll = (context) => {
    return context.keys().map(context);
  };
  
  const category1Images = importAll(require.context('./images/category1', false, /\.(png|jpe?g|svg)$/));
  const category2Images = importAll(require.context('./images/category2', false, /\.(png|jpe?g|svg)$/));
  
  export const images = [
    category1Images,
    category2Images,
  ];
  