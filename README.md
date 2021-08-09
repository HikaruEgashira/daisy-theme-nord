# daisy-theme-nord

![](./image.png)

online demo <https://play.tailwindcss.com/15dpr3y0GX>

## usage

see [example](./example/README.md)

```ts
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

```
