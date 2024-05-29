import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  documentation: [{
    type: "doc",
    label: "Welcome",
    id: "index"
  }, {
    type: "category",
    label: "Getting started",
    items: ["getting-started/join-discord", "getting-started/get-maps"]
  }, {
    type: "doc",
    label: "FAQ",
    id: "faq"
  }],
};

export default sidebars;
