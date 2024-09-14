import { createDirectus, rest, authentication } from "@directus/sdk";

// create a Directus client to connect to the Directus API
const client = createDirectus(process.env.DIRECTUS_URL as string)
    .with(rest({ onRequest: (options) => ({ ...options, cache: "no-cache" }) }))
    .with(authentication());

client.setToken(process.env.DIRECTUS_KEY as string).catch(console.error);

export default client;
