export type Menu = {
  name: string;
  href: string | undefined;
  icon?: string;
  dropDown?: boolean;
  isDropDown?: boolean;
  children?: SubMenu[][];
};

export type SubMenu = {
  name: string;
  href: string;
  icon: string;
};
