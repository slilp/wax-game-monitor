export interface TemplateInfo {
  success: boolean;
  data: AtomicAssetInfo[];
}

export interface AtomicAssetInfo {
  template_id: string;
  immutable_data: any;
  mutable_data: any;
  issued_supply: number;
}

export interface AtomicSale {
  success: boolean;
  data: AtomicSaleInfo[];
}

export interface AtomicSaleInfo {
  price: {
    amount: number;
  };
}
