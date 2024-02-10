/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GOOGLE_TRACKING_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
