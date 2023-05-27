export enum NavItem {
  home = 'home',
  about = 'about',
  contact = 'contact',
}
export type NavItems = keyof typeof NavItem
