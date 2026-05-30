# Production Deployment

Primary domain: `umeshrajbanshi.com.np`

## Vercel

1. Import this repository into Vercel as a Next.js project.
2. Use the default build command: `npm run build`.
3. Use the default output handling for Next.js.
4. Add `umeshrajbanshi.com.np` in Vercel Project Settings > Domains.
5. Update the domain DNS records to the values Vercel provides.

## Production Files

- `app/sitemap.ts` generates `/sitemap.xml`.
- `app/robots.ts` points crawlers to the production sitemap.
- `vercel.json` adds clean URLs and basic security headers.
- `metadataBase` is set to `https://umeshrajbanshi.com.np` in `app/layout.tsx`.
