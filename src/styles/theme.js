import { extendTheme } from "@chakra-ui/react";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { Textarea } from "./Textarea";
export const defaultTheme = extendTheme({
  colors: {
    bg: "#F0E9D2",
    panel: "#B4A888",
    button: "#548B81",
    font: "#3F2C00",
    darkRed: "#E53E3E",
  },
  components: {
    Input,
    Select,
    Button,
    Textarea,
  },
});
