import { defineConfig, transform } from "windicss/helpers";
import nord from "daisy-theme-nord";
//@ts-ignore
import colors from "daisyui/colors";

export default defineConfig({
  plugins: [transform("daisyui")],
  theme: {
    extend: {
      colors,
    },
  },
  daisyui: {
    themes: [{ nord }],
  },
});
