import image from "image.png-branded";
import React from "react";

const prependHost = (path: AssetURLWithoutHost) => {
  return `https://host.com/${path}`;
};

const a = <img src={prependHost(image)} />;

const b = <img src={image} />;
