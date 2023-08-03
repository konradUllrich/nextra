import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>INTREXX</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },

  chat: {
    link: "https://discord.com",
  },
  editLink: { text: "edit" },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",

  useNextSeoProps: () => ({ nofollow: true, noindex: true }),
};

export default config;
