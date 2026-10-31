import { createEnvSchema, validateEnv } from '@astro-v7/shared/utils/env';

export const envSchema = createEnvSchema({
  PUBLIC_SITE_URL: 'https://githubzhinan.homes',
  PUBLIC_SITE_NAME: 'GitHub指南博客',
  PUBLIC_AUTHOR: 'GitHub指南团队',
  PUBLIC_LOCALE: 'zh-CN',
});

export const env = validateEnv(envSchema, import.meta.env ?? {});
