export type Filter = {
  name: string;
  label: string;
  items: { name: string; isSelected: boolean }[];
  isOpen: boolean;
};
