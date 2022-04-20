import { backgroundColor, buttonColor, fontColor } from "../config";

export const customInputSelectStyle = {
  control: (base, state) => ({
    ...base,
    width: "200px",
    background: backgroundColor,
    // match with the menu
    borderRadius: "4px",
    // Overwrittes the different states of border
    borderColor: "black",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: buttonColor,
    },
  }),
  menu: (base) => ({
    ...base,
    background: backgroundColor,

    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
  option: (base, state) => ({
    ...base,
    background: state.isFocused ? buttonColor : backgroundColor,
    color: fontColor,
  }),
};
