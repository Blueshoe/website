export type Menu = {
  name: string;
  href: string | undefined;
  icon?: string;
  dropDown?: boolean;
  isDropDown?: boolean;
  children?: Menu[][];
};
