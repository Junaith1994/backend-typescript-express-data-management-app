export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};

export interface Variant {
  type: string;
  value: string;
}

export interface Inventory {
  quantity: number;
  inStock: boolean;
}
