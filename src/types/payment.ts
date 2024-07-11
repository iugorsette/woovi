export interface PaymentOptionData {
    value: string;
    label: string;
    description?: string;
    total?: string;
    obs?: string;
    category: 'pix' | 'pix-parcelado';
  }