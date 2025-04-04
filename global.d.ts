declare module "*.md" {
  const react: React.FC;
  const attributes: Record<string, unknown>;
  const meta: Record<string, unknown>;
  const html: string;
  const body: string;
  export { react, meta, body, html, attributes };
}
