import { ImageResponse } from "next/og";

import fs from "fs";
import { join } from "path";

const cwd = join(process.cwd());

function loadFile(relPath: string): Buffer {
  return fs.readFileSync(join(cwd, relPath));
}

function loadDataUrl(relPath: string, mimeType: string): string {
  const fileData = loadFile(relPath);
  const base64Data = fileData.toString("base64");
  return `data:${mimeType};base64,${base64Data}`;
}

export async function generateOgImage() {
  const imageSrc = loadDataUrl("/public/icons/embed.png", "image/png");

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Venera AI"
          width={1200}
          height={630}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
