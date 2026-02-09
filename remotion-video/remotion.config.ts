import { Config } from "@remotion/cli/config";
import * as path from "path";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Configure webpack to resolve @ path alias
Config.overrideWebpackConfig((config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias ?? {}),
        "@": path.join(process.cwd(), "src"),
      },
    },
  };
});
