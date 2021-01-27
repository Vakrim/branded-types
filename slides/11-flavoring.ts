type UserId = string & { __tag?: "UserId" };
type ProductId = string & { __tag?: "ProductId" };
//                               ⬆ notice

const getUser = (id: UserId) => {
  //...
};

const asUserId = (id: string) => {
  return id as UserId;
};

const asProductId = (id: string) => {
  return id as ProductId;
};

const userId = asUserId("abc");
const productId = asProductId("abc");

const untaggedId = "abc";

getUser(userId);
getUser(productId);
getUser(untaggedId); // ⬅ difference

userId.slice(2, 3);

export {}
