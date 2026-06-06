import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Bundle = 'single' | 'double' | 'triple';

export interface Product {
  id: string;
  sku: string;
  name_ar: string;
  name_en: string;
  description_ar?: string;
  image_url?: string;
  price_single: number;
  price_double: number;
  price_triple: number;
}

export interface CartItem {
  product: Product;
  bundle: Bundle;
  quantity: number;
  price: number;
}

export interface CheckoutData {
  customer_name: string;
  customer_phone: string;
  customer_city: string;
  customer_notes: string;
}

export interface OrderResult {
  id: string;
  order_number: string;
  total: number;
  customer_name: string;
}

const BUNDLE_PRICES: Record<Bundle, number> = {
  single: 199,
  double: 279,
  triple: 349,
};

const BUNDLE_LABELS: Record<Bundle, string> = {
  single: 'قطعة واحدة',
  double: 'قطعتان (الأكثر طلباً)',
  triple: 'ثلاث قطع',
};

interface CartStore {
  // Cart state
  items: CartItem[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isUpsellOpen: boolean;
  isSubmitting: boolean;

  // Order state
  currentOrder: OrderResult | null;
  checkoutData: CheckoutData;

  // Actions
  addItem: (product: Product, bundle?: Bundle) => void;
  removeItem: (sku: string) => void;
  updateBundle: (sku: string, bundle: Bundle) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  openUpsell: (order: OrderResult) => void;
  closeUpsell: () => void;
  setCheckoutData: (data: Partial<CheckoutData>) => void;
  setSubmitting: (val: boolean) => void;
  setCurrentOrder: (order: OrderResult | null) => void;

  // Computed
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getBundlePrice: (bundle: Bundle) => number;
  getBundleLabel: (bundle: Bundle) => string;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      isCheckoutOpen: false,
      isUpsellOpen: false,
      isSubmitting: false,
      currentOrder: null,
      checkoutData: {
        customer_name: '',
        customer_phone: '',
        customer_city: '',
        customer_notes: '',
      },

      addItem: (product, bundle = 'double') => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.sku === product.sku
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.sku === product.sku
                  ? { ...i, bundle, price: BUNDLE_PRICES[bundle] }
                  : i
              ),
              isCartOpen: true,
            };
          }
          return {
            items: [
              ...state.items,
              { product, bundle, quantity: 1, price: BUNDLE_PRICES[bundle] },
            ],
            isCartOpen: true,
          };
        });
      },

      removeItem: (sku) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.sku !== sku),
        })),

      updateBundle: (sku, bundle) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.product.sku === sku
              ? { ...i, bundle, price: BUNDLE_PRICES[bundle] }
              : i
          ),
        })),

      clearCart: () => set({ items: [], currentOrder: null }),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      openCheckout: () =>
        set({ isCheckoutOpen: true, isCartOpen: false }),
      closeCheckout: () => set({ isCheckoutOpen: false }),
      openUpsell: (order) =>
        set({ isUpsellOpen: true, isCheckoutOpen: false, currentOrder: order }),
      closeUpsell: () => set({ isUpsellOpen: false }),

      setCheckoutData: (data) =>
        set((state) => ({
          checkoutData: { ...state.checkoutData, ...data },
        })),

      setSubmitting: (val) => set({ isSubmitting: val }),
      setCurrentOrder: (order) => set({ currentOrder: order }),

      getTotalItems: () => get().items.length,
      getTotalPrice: () => get().items.reduce((sum, i) => sum + i.price, 0),
      getBundlePrice: (bundle) => BUNDLE_PRICES[bundle],
      getBundleLabel: (bundle) => BUNDLE_LABELS[bundle],
    }),
    {
      name: 'nama-cart',
      partialize: (state) => ({ items: state.items, checkoutData: state.checkoutData }),
    }
  )
);
