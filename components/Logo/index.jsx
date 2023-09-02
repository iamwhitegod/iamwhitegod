import Image from "next/image";
import React from "react";

const Logo = ({ type }) => {
  if (type === "dark") {
    return (
      <Image
        src="/whitegod.svg"
        alt="Whitegod Logo"
        width={40}
        height={40}
        priority
      />
    );
  }

  return (
    <Image
      src="/whitegod.svg"
      alt="Whitegod Logo"
      className="logo--inverted"
      width={40}
      height={40}
      priority
    />
  );
};

export default Logo;
