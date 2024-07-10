// src/services/paymentService.ts
interface PaymentOptionData {
  value: string;
  label: string;
  description: string;
  category: 'pix' | 'pix-parcelado';
}

export const getPaymentOptions = async (): Promise<PaymentOptionData[]> => {
  return [
    {
      value: 'pix',
      label: '1x R$ 30.500,00',
      description: 'Ganhe 3% de Cashback. R$ 300,00 de volta no seu Pix na hora',
      category: 'pix',
    },
    {
      value: 'pix-parcelado-2x',
      label: '2x R$ 15.300,00',
      description: 'Total: R$ 30.600,00',
      category: 'pix-parcelado',
    },
    {
      value: 'pix-parcelado-3x',
      label: '3x R$ 10.196,66',
      description: 'Total: R$ 30.620,00',
      category: 'pix-parcelado',
    },
    {
      value: 'pix-parcelado-4x',
      label: '4x R$ 7.725,00',
      description: 'Total: R$ 30.900,00 -3% de juros: Melhor opção de parcelamento',
      category: 'pix-parcelado',
    },
    {
      value: 'pix-parcelado-5x',
      label: '5x R$ 6.300,00',
      description: 'Total: R$ 31.500,00',
      category: 'pix-parcelado',
    },
    {
      value: 'pix-parcelado-6x',
      label: '6x R$ 5.283,33',
      description: 'Total: R$ 31.699,98',
      category: 'pix-parcelado',
    },
    {
      value: 'pix-parcelado-7x',
      label: '7x R$ 4.542,85',
      description: 'Total: R$ 31.800,00',
      category: 'pix-parcelado',
    },
  ];
};
