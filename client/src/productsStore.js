// COFFEE_PRICE=price_1MdWLqEcHIGilXgH7x8ZJ44C
// SUNGLASSESS_PRICE=price_1MdWN4EcHIGilXgHruinXFe3
// CAMERA_PRICE=price_1MdWOjEcHIGilXgHQjsGTRt4

const products = [
  {
    id: 'price_1MdWLqEcHIGilXgH7x8ZJ44C',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: 'price_1MdWN4EcHIGilXgHruinXFe3',
    title: 'Sunglasses',
    price: 9.99,
  },
  {
    id: 'price_1MdWOjEcHIGilXgHQjsGTRt4',
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
