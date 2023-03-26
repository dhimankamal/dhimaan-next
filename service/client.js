import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const client = new ApolloClient({
    uri: baseUrl,
    cache: new InMemoryCache(),
});

export default client;