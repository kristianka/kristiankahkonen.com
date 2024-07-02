# kristiankahkonen.com

Live at https://kristiankahkonen.com/!

Portfolio website, work in progress. Please come back later!

### Running production on server

-   Add SSL certifications to certs folder in root, change urls in `nginx.conf` to your website urls
-   Run `docker compose up`

### Running locally

-   Inside Docker: `docker compose -f "docker-compose.dev.yml" up`
-   Outside Docker:
  -  Install dependencies `npm install`
  -  Run `npm run dev`

### Testing

Make sure the app is running, instructions above

- Inside Docker: `npm run test:e2e-dockerized`
- Outside Docker: `npm run test:e2e-local` 
