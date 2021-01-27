declare module "*.png" {
  const value: string;
  export default value;
}

// branded types

declare class AssetURLWithoutHost {
  __tag: "AssetURLWithoutHost";
}

declare module "*.png-branded" {
  const value: AssetURLWithoutHost;
  export default value;
}
