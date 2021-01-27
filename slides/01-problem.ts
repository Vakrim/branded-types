import { fetchUser } from 'awesome-user-fetcher';

interface User {
  id: string;
  name: string;
}

const getUser = (id: string): User => {
  return fetchUser(id);
};

getUser("65da4549-ab16-41f9-b2e5-068dfc60991f");

getUser("Kamil"); // 😔

const productId = "98091d85-94a1-4c30-82dc-165d0f677953";
getUser(productId); // 😔
