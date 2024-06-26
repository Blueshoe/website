export type Menu = {
  name: string;
  href: string | undefined;
  icon?: string;
  dropDown?: boolean;
  isDropDown?: boolean;
  children?: SubMenu[];
  singleChildrenContentStyle?: boolean;
  showChildrenDivider?: boolean;
};

export type SubMenuLink = {
  name: string;
  href: string;
  icon: string;
  image?: string;
  caps?: string;
  helpText?: string;
};

export type SubMenu = {
  title: string;
  showTitle?: boolean;
  singleLineLinks?: boolean;
  links: SubMenuLink[];
  defaultSubmenuHeadline?: string;
  defaultSubmenuHelpText?: string;
  defaultSubmenuImage?: string;
  showExtraButton?: boolean;
  extraButtonLabel?: string;
  extraButtonLink?: string;
};
