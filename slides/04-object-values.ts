class UserId {
  constructor(public id: string) {}
}

class ProductId {
  constructor(public id: string) {}
}

const getUser = (id: UserId) => {
  //...
}

const userId = new UserId('abc');
const productId = new ProductId('eqw');

getUser(userId);

getUser(productId); // wtf?

// Structural typing

export {};
