const products = [
  {
    id: '1',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: '2',
    title: 'Sunglasses',
    price: 9.99,
  },
  {
    id: '3',
    title: 'Camera',
    price: 39.99,
  },
];

function getProductData(id) {
  let data = products.find((p) => p.id === id);

  if (!data) {
    console.log('Product data does not exist for ID: ' + id);
    return undefined; // easy to read
  }

  return data;
}

export { products, getProductData };
