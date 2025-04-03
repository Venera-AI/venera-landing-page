import { routing } from "@/i18n/routing";
import { ImageResponse } from "next/og";

export function generateStaticParams() {
  return [...routing.locales].map((locale) => ({ locale }));
}

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://viai.io/icons/embed.png"
          alt="Venera AI"
          width={1200}
          height={600}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
