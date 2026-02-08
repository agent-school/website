import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agent School — AI That Learns Once, Runs Repeatedly",
    short_name: "Agent School",
    description:
      "Train and certify AI agents to automate your workflows with certified reliability. 10x cheaper than traditional approaches.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F7",
    theme_color: "#173440",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
