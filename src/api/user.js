export function useMe () {
  return {
    loading: false,
    loggedOut: true,
    user: {},
    refresh: () => {}
  }
}
