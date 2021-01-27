type UserId = string & { __tag: "UserId" };
type ProductId = string & { __tag: "ProductId" };

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
getUser("abc");
getUser(productId);
getUser(untaggedId);

userId.slice(2, 3);

export {}
