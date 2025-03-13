declare module "*.md" {
  import React from "react";
  const html: string;
  const body: string;
  const meta: { resourcePath: string };
  const attributes: Record<string, unknown>;
  const react: React.VFC;
  export { attributes, html, meta, body, react };
}
