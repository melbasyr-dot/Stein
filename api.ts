import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.namabeauty.shop';

export const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Intercept to add UTM params
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const utm = {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      fbclid: params.get('fbclid'),
      ttclid: params.get('ttclid'),
    };
    // Store UTM in session for checkout
    if (utm.utm_source) {
      sessionStorage.setItem('nama_utm', JSON.stringify(utm));
    }
  }
  return config;
});

export const getStoredUtm = () => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem('nama_utm') || '{}');
  } catch {
    return {};
  }
};

export type OrderPayload = {
  customer_name: string;
  customer_phone: string;
  customer_city?: string;
  customer_notes?: string;
  items: Array<{
    product_id: string;
    sku: string;
    name_ar: string;
    name_en: string;
    quantity: number;
    price: number;
    bundle: string;
  }>;
  subtotal: number;
  total: number;
  shipping_fee?: number;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  fbclid?: string;
  ttclid?: string;
};

export const ordersApi = {
  create: (payload: OrderPayload) => api.post('/orders/', payload),
  acceptUpsell: (orderId: string, product: string, amount: number) =>
    api.post(`/orders/${orderId}/upsell`, {
      order_id: orderId,
      upsell_product: product,
      upsell_amount: amount,
    }),
  get: (orderId: string) => api.get(`/orders/${orderId}`),
};

export const productsApi = {
  list: () => api.get('/products/'),
};
