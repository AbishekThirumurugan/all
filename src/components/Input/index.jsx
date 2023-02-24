import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid",
  srcOutlineBluegray300:
    "bg-white_A700 border-[1px] border-bluegray_300 border-solid",
};
const shapes = {
  RoundedBorder6: "rounded-[6px]",
  srcRoundedBorder6: "rounded-[6px]",
};
const sizes = { sm: "pl-[12px] py-[13px]", smSrc: "pr-[13px] py-[13px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder6", "srcRoundedBorder6"]),
  variant: PropTypes.oneOf(["OutlineBluegray100", "srcOutlineBluegray300"]),
  size: PropTypes.oneOf(["sm", "smSrc"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcRoundedBorder6",
  variant: "srcOutlineBluegray300",
  size: "smSrc",
};

export { Input };
