# kristiankahkonen.com

Blog and portfolio website. Main technologies NextJS, Directus.

Live at https://kristiankahkonen.com/!

<h2>Technologies used 🔧</h2>

All the code in frontend and backend are made with TypeScript and with latest libraries and standards. Frontend and backend are in the same codebase thanks to NextJS. Almost everything is Server-Side Rendered (SSR) and/or pre-generated with Static Site Generation (SSG). Updated on demand with a webhook from Directus with Incremental Static Regeneration (ISR)
.

-   NextJS with app router
-   TailwindCSS
-   Framer Motion
-   Basic testing automated by Playwright

Behind the scenes:

-   Directus CMS
-   Postgre SQL database
-   Redis cache
-   NGINX
-   Everything is Dockerized
-   Hosted on Oracle Cloud Instance
-   Images uploaded to Oracle Object Storage
-   Cloudflare protection

<h2>Running the app</h2>

<h3>Running production on server</h3>

-   Add SSL certifications to certs folder in root, change urls in `nginx.conf` to your website urls
-   Run `docker compose up`

<h3>Running locally</h3>

-   Inside Docker: `docker compose -f "docker-compose.dev.yml" up`
-   Outside Docker
-   Install dependencies `pnpm install`
-   Run `pnpm run dev`

<h2>Testing</h2>

Make sure the app is running, instructions above

-   Inside Docker: `pnpm run test:e2e-dockerized`
-   Outside Docker: `pnpm run test:e2e-local`
