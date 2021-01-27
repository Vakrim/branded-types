declare module "awesome-user-fetcher" {
  interface User {
    id: string;
    name: string;
  }

  export const fetchUser: (id: string) => User;
}
