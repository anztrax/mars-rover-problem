import isNumber from "lodash/isNumber";
import isNil from "lodash/isNil";

const isValidCoordNumber = (value) => {
  return (isNumber(value) && !isNil(value) && value > 0);
};

export {
  isValidCoordNumber
}
