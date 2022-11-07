import { useAuthUser } from "../store";
/* eslint-disable no-undef */
export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthUser();
  const authUser = authStore.authUser;

  if (authUser) return true;
  return navigateTo("/");
});
