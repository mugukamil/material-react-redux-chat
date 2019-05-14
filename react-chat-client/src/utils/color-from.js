import {
  red,
  pink,
  indigo,
  purple,
  orange,
  blue,
  teal,
  green,
  lightGreen,
  amber,
  deepOrange,
  deepPurple,
  blueGrey
} from "@material-ui/core/colors";

const colors = [
  red,
  pink,
  indigo,
  purple,
  orange,
  blue,
  teal,
  green,
  lightGreen,
  amber,
  deepOrange,
  deepPurple,
  blueGrey
];

export default string => {
  try {
    const index = string
      .toString()
      .split("")
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num);

    const colorIndex = index % colors.length;

    return colors[colorIndex][500];
  } catch (e) {
    console.error(e);
    return blueGrey[500];
  }
};
