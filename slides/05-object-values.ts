// Nominal typing

class UserId {
  __tag = "UserId" as const;
  constructor(public id: string) {}
}

class ProductId {
  __tag = "ProductId" as const;
  constructor(public id: string) {}

  isEqual(other: unknown) {
    return other instanceof ProductId && other.id === this.id;
  }
}

const getUser = (id: UserId) => {
  //...
};

const userId = new UserId("abc");
const productId = new ProductId("eqw");

getUser(userId);

getUser(productId);

export {};
