import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind";
import * as path from "path";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Configure webpack with Tailwind CSS and path alias
Config.overrideWebpackConfig((config) => {
  // First enable Tailwind
  const configWithTailwind = enableTailwind(config);
  
  // Then add path alias
  return {
    ...configWithTailwind,
    resolve: {
      ...configWithTailwind.resolve,
      alias: {
        ...(configWithTailwind.resolve?.alias ?? {}),
        "@": path.join(process.cwd(), "src"),
      },
    },
  };
});
