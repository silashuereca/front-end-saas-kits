import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { useAuthUser } from "../store";
// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  const authUser = useAuthUser();
  const cache = new InMemoryCache();

  const apolloClient = new ApolloClient({
    cache,
    uri: "", //your graphql endpoint
  });

  return nuxtApp.provide("apollo", apolloClient);
});
