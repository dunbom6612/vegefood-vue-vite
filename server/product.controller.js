const { v4: uuidv4 } = require('uuid');

const PRODUCTS = [
  {
    id: uuidv4(),
    name: 'Bell Pepper',
    imagePath: `/images/product-1.jpg`,
    status: 30,
    price: 120,
    discountPrice: 80
  },
  {
    id: uuidv4(),
    name: 'Strawberry',
    imagePath: '/images/product-2.jpg',
    status: 0,
    price: 119,
    discountPrice: 119
  },
  {
    id: uuidv4(),
    name: 'Green Beans',
    imagePath: '/images/product-3.jpg',
    status: 0,
    price: 119,
    discountPrice: 119
  },
  {
    id: uuidv4(),
    name: 'Purple Cabbage',
    imagePath: '/images/product-4.jpg',
    status: 0,
    price: 119,
    discountPrice: 119
  },
  {
    id: uuidv4(),
    name: 'Tomatoe',
    imagePath: `/images/product-5.jpg`,
    status: 30,
    price: 120,
    discountPrice: 80
  },
  {
    id: uuidv4(),
    name: 'Brocolli',
    imagePath: '/images/product-6.jpg',
    status: 0,
    price: 119,
    discountPrice: 119
  },
  {
    id: uuidv4(),
    name: 'Carrots',
    imagePath: '/images/product-7.jpg',
    status: 0,
    price: 119,
    discountPrice: 98
  },
  {
    id: uuidv4(),
    name: 'Fruit Juice',
    imagePath: '/images/product-8.jpg',
    status: 0,
    price: 119,
    discountPrice: 202
  }
];

const PRODUCT_DETAIL = [
  {
    id: PRODUCTS[0].id,
    name: 'Bell Pepper',
    imagePath: `/images/product-1.jpg`,
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  },
  {
    id: PRODUCTS[1].id,
    name: 'Strawberry',
    imagePath: '/images/product-2.jpg',
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  },
  {
    id: PRODUCTS[2].id,
    name: 'Green Beans',
    imagePath: '/images/product-3.jpg',
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  },
  {
    id: PRODUCTS[3].id,
    name: 'Purple Cabbage',
    imagePath: '/images/product-4.jpg',
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  },
  {
    id: PRODUCTS[4].id,
    name: 'Tomatoe',
    imagePath: `/images/product-5.jpg`,
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  },
  {
    id: PRODUCTS[5].id,
    name: 'Brocolli',
    imagePath: '/images/product-6.jpg',
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  },
  {
    id: PRODUCTS[6].id,
    name: 'Carrots',
    imagePath: '/images/product-7.jpg',
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  },
  {
    id: PRODUCTS[7].id,
    name: 'Fruit Juice',
    imagePath: '/images/product-8.jpg',
    score: 5,
    votes: 100,
    sold: 500,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
    availableQuantity: 600
  }
];

exports.getAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: 'i' } }
    : {};

  res.status(200).send(PRODUCTS);
};

exports.getProductDetailById = (req, res) => {
  const id = req.query.id;

  const foundedProduct = PRODUCT_DETAIL.find((product) => product.id === id);
  res.status(200).send(foundedProduct);
};

exports.createAccount = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  res.send({ message: 'The system has recored your data' });
};
