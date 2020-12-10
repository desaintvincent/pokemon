export function useMe () {
  return {
    loading: false,
    loggedOut: false,
    user: {},
    refresh: () => {}
  }
}
