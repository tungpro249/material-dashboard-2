/**
 The boxShadow() function helps you to create a box shadow for an element
 */

// Material Dashboard 2 React helper functions
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

// eslint-disable-next-line default-param-last
function boxShadow(offset: number[], radius: number[], color: string, opacity: number, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
