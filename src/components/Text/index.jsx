import React from "react";

const variantClasses = {
  h1: "sm:text-[32px] md:text-[34px] text-[36px]",
  h2: "sm:text-[24px] md:text-[26px] text-[28px]",
  h3: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-bold text-[20px]",
  h5: "text-[18px]",
  h6: "text-[16px]",
  body1: "font-medium text-[15px]",
  body2: "text-[14px]",
  body3: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
