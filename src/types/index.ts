export type ProductCategory = 
  | 'Medicines'
  | 'Medical Equipment'
  | 'First Aid'
  | 'Healthcare Essentials'
  | 'Personal Care'
  | 'Vitamins and Supplements';

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: ProductCategory;
  price: number; // in INR
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  inStock: boolean;
  requiresPrescription: boolean;
  specs: { [key: string]: string };
  highlights: string[];
  manufacturer: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  prescriptionUploaded?: boolean;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'razorpay' | 'upi' | 'cod';
  prescriptionFile?: string | null;
}

export interface Order {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  customer: CustomerDetails;
  status: 'Confirmed' | 'Processing' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
}
