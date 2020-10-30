import { DefaultTheme } from "styled-components";
import { theme } from "../styles/theme/default";
import { Theme } from "@material-ui/core";

export const media = theme.breakpoints.keys.reduce((acc, curr) => {
  acc[curr] = ({ theme }: { theme: DefaultTheme }) =>
    `@media only screen and (min-width: ${theme.breakpoints.values[curr]}px)`;

  return acc;
}, {} as { [key in keyof Theme["breakpoints"]["values"]]: (...args: any) => string });
