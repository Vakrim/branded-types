import image from "image.png";
import React from "react";

const prependHost = (path: string) => {
  return `https://host.com/${path}`;
};

const a = <img src={prependHost(image)} />;

const b = <img src={image} />; // 😔
