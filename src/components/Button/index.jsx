import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder10: "rounded-[10px]",
  RoundedBorder3: "rounded-[3px]",
  RoundedBorder6: "rounded-[6px]",
};
const variants = {
  icbFillBlack900: "bg-black_900",
  FillBlue50: "bg-blue_50 text-gray_902",
  FillBlueA700: "bg-blue_A700 text-white_A700",
};
const sizes = { smIcn: "p-[2px]", sm: "p-[8px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder10",
    "RoundedBorder3",
    "RoundedBorder6",
  ]),
  variant: PropTypes.oneOf(["icbFillBlack900", "FillBlue50", "FillBlueA700"]),
  size: PropTypes.oneOf(["smIcn", "sm"]),
};

Button.defaultProps = {
  className: "",
  shape: "RoundedBorder3",
  variant: "FillBlue50",
  size: "sm",
};
export { Button };
