export interface SubscriptionPlan {
  id: string;
  price: number;
  duration: string;
}

export interface SubscriptionPlans {
  [key: string]: SubscriptionPlan;
}

export const PAYPAL_SUBSCRIPTION_PLANS: SubscriptionPlans = {
  starter: {
    id: 'P-onetime',
    price: 49.99,
    duration: 'onetime',
  },
  monthly: {
    id: 'P-6R173375A3386873BMYRJNDY',
    price: 274.99,
    duration: 'monthly',
  },
  quarter: {
    id: 'P-4B532167BT409240BMYRJOFA',
    price: 749.99,
    duration: 'quarter',
  },
  semiannual: {
    id: 'P-4TV602389N101623AMYRJOPA',
    price: 1199.99,
    duration: 'semiannual',
  },
};
