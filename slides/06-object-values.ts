class UserId {
  __tag = "UserId" as const;
  constructor(public id: string) {}

  isEqual(other: UserId) {
    return other.id === this.id;
  }
}

class ProductId {
  __tag = "ProductId" as const;
  constructor(public id: string) {}

  isEqual(other: ProductId) {
    return other.id === this.id;
  }
}

const userId = new UserId("abc");
const sameUserId = new UserId("abc");

const productId = new ProductId("eqw");

userId === productId;

userId === sameUserId; // false

userId.isEqual(sameUserId); // true
userId.isEqual(productId);

export {};
