import { style } from "@vanilla-extract/css";

export const pageRootContainer = style({
  minWidth: "1024px",
  padding: "12px",
});

export const commonContainer = style({
  display: "flex",
  // flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});
