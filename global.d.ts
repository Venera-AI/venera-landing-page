declare module "*.md" {
  const react: React.FC;
  const attributes: Record<string, unknown>;
  const meta: Record<string, unknown>;
  const html: string;
  const body: string;
  export { react, meta, body, html, attributes };
}

namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_FIREBASE_API_KEY?: string;
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?: string;
    NEXT_PUBLIC_FIREBASE_PROJECT_ID?: string;
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?: string;
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?: string;
    NEXT_PUBLIC_FIREBASE_APP_ID?: string;
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?: string;
    NEXT_PUBLIC_USE_FIREBASE_EMULATOR?: string;
    NEXT_PUBLIC_IP_INFO_TOKEN?: string;
    NEXT_PUBLIC_BASE_URL?: string;
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY?: string;
  }
}
