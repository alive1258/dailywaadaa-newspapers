import {
  Stethoscope,
  Syringe,
  Sparkles,
  Scissors,
  Siren,
  FlaskConical,
  type LucideIcon,
  ShoppingBag,
  Bone,
  Dumbbell,
  Heart,
  ShieldCheck,
  Clock,
  Award,
  Home,
  Bath,
} from "lucide-react";

/* ================= SERVICES ================= */
export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "wellness-exams",
    icon: Stethoscope,
    title: "Wellness Exams",
    description:
      "Regular checkups and preventive care to catch issues early and keep your pet thriving at every life stage.",
  },
  {
    slug: "vaccinations",
    icon: Syringe,
    title: "Vaccinations",
    description:
      "Keep your pets safe with our advanced, up-to-date vaccination programs tailored to their lifestyle.",
  },
  {
    slug: "dental-care",
    icon: Sparkles,
    title: "Dental Care",
    description:
      "Professional dental cleanings and treatment for strong teeth, healthy gums, and fresher breath.",
  },
  {
    slug: "surgery",
    icon: Scissors,
    title: "Surgery",
    description:
      "Advanced surgical procedures performed with compassionate, precise care in a fully equipped facility.",
  },
  {
    slug: "emergency-care",
    icon: Siren,
    title: "Emergency Care",
    description:
      "24/7 emergency services for critical and urgent situations, whenever your pet needs us most.",
  },
  {
    slug: "laboratory-tests",
    icon: FlaskConical,
    title: "Laboratory Tests",
    description:
      "In-house diagnostics and lab testing for fast, accurate results and quicker peace of mind.",
  },
];

/* ================= WHY CHOOSE US ================= */
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    icon: Award,
    title: "Experienced Vets",
    description: "12+ years of combined experience caring for pets of every breed and size.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency support, because pet emergencies don't wait.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & Trusted",
    description: "AAHA-accredited facility following the highest standards of veterinary care.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient like family, with patience, empathy, and gentle handling.",
  },
];

/* ================= STATS ================= */
export const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Care" },
  { value: "5K+", label: "Happy Pets" },
  { value: "15+", label: "Expert Staff" },
];

/* ================= VETERINARIANS ================= */
export interface VetItem {
  slug: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  years: string;
  bio: string;
}

export const VETS: VetItem[] = [
  {
    slug: "emily-carter",
    name: "Dr. Emily Carter",
    role: "Veterinary Surgeon",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    years: "10+ Years Experience",
    bio: "Specializes in soft-tissue and orthopedic surgery with a gentle, patient-first approach.",
  },
  {
    slug: "james-wilson",
    name: "Dr. James Wilson",
    role: "Pet Care Specialist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    years: "8+ Years Experience",
    bio: "Focused on preventive wellness and nutrition plans for cats and dogs of all ages.",
  },
  {
    slug: "sophia-lee",
    name: "Dr. Sophia Lee",
    role: "Veterinary Dermatologist",
    image:
      "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    years: "9+ Years Experience",
    bio: "Diagnoses and treats skin, coat, and allergy conditions with advanced dermatology care.",
  },
  {
    slug: "michael-adebayo",
    name: "Dr. Michael Adebayo",
    role: "Emergency & Critical Care",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    years: "11+ Years Experience",
    bio: "Leads our 24/7 emergency team, stabilizing and treating critical cases around the clock.",
  },
];

/* ================= WELLNESS PLANS ================= */
export interface PlanItem {
  slug: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featured?: boolean;
  features: string[];
}

export const PLANS: PlanItem[] = [
  {
    slug: "basic-care",
    name: "Basic Care",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: ["1 Wellness Exam", "Core Vaccinations", "Basic Health Check", "Nail Trim"],
  },
  {
    slug: "premium-care",
    name: "Premium Care",
    monthlyPrice: 39,
    yearlyPrice: 390,
    featured: true,
    features: [
      "All Basic Care Benefits",
      "Dental Cleaning",
      "Blood Work",
      "Priority Appointments",
    ],
  },
  {
    slug: "complete-care",
    name: "Complete Care",
    monthlyPrice: 69,
    yearlyPrice: 690,
    features: [
      "All Premium Benefits",
      "Advanced Diagnostics",
      "Surgery Discounts",
      "24/7 Emergency",
    ],
  },
];

/* ================= SHOP PRODUCTS ================= */
export interface ProductItem {
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    slug: "premium-dog-food",
    name: "Premium Dog Food",
    price: 29.99,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "cat-litter",
    name: "Cat Litter",
    price: 18.99,
    category: "Essentials",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "pet-shampoo",
    name: "Pet Shampoo",
    price: 14.99,
    category: "Grooming",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "pet-toys",
    name: "Pet Toys",
    price: 9.99,
    category: "Toys",
    image:
      "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "cat-food",
    name: "Gourmet Cat Food",
    price: 24.99,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "dog-leash",
    name: "Comfort Dog Leash",
    price: 16.99,
    category: "Essentials",
    image:
      "https://images.unsplash.com/photo-1601758260463-58a9053e7bc9?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "pet-bed",
    name: "Cozy Pet Bed",
    price: 39.99,
    category: "Comfort",
    image:
      "https://images.unsplash.com/photo-1541599468348-e96984315921?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "grooming-brush",
    name: "Grooming Brush Kit",
    price: 12.99,
    category: "Grooming",
    image:
      "https://images.unsplash.com/photo-1587764379873-97837921fd44?q=80&w=800&auto=format&fit=crop",
  },
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Food",
  "Essentials",
  "Grooming",
  "Toys",
  "Comfort",
];

/* ================= TESTIMONIALS ================= */
export interface TestimonialItemStatic {
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
}

export const TESTIMONIALS: TestimonialItemStatic[] = [
  {
    name: "Sarah Johnson",
    role: "Happy Dog Mom",
    rating: 5,
    quote:
      "The team at PetCare is amazing! They treated my dog like family and the care was exceptional.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Daniel Reyes",
    role: "Cat Parent",
    rating: 5,
    quote:
      "From the front desk to the vets, everyone genuinely cares. Booking online is fast and easy too.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    role: "Rescue Foster",
    rating: 5,
    quote:
      "Their emergency team saved my foster puppy's life. I can't thank Dr. Adebayo enough.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Marcus Bell",
    role: "Pet Parent of Two",
    rating: 5,
    quote:
      "Transparent pricing, friendly staff, and the wellness plan saves us real money every year.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Olivia Chen",
    role: "First-time Puppy Owner",
    rating: 5,
    quote:
      "They walked me through every step of my puppy's first vaccinations. So patient and kind.",
    image:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Ethan Brooks",
    role: "Senior Dog Owner",
    rating: 5,
    quote:
      "The dental care program made a huge difference for my 10-year-old lab. Highly recommend.",
    image:
      "https://images.unsplash.com/photo-1500907688079-8f1e97b48c46?q=80&w=200&auto=format&fit=crop",
  },
];

/* ================= BLOG ================= */
export interface BlogItemStatic {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export const BLOG_POSTS: BlogItemStatic[] = [
  {
    slug: "10-signs-your-pet-needs-a-vet-visit",
    title: "10 Signs Your Pet Needs a Vet Visit",
    excerpt:
      "Learn to spot the early warning signs that mean it's time to book an appointment.",
    date: "May 20, 2026",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "how-to-keep-your-pet-happy-and-healthy",
    title: "How to Keep Your Pet Happy & Healthy",
    excerpt:
      "Simple daily habits that support your pet's physical and emotional wellbeing.",
    date: "May 18, 2026",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1601758003122-53c40e686a19?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "guide-to-pet-nutrition-basics",
    title: "Guide to Pet Nutrition Basics",
    excerpt:
      "What to look for on the label and how to build a balanced diet for your companion.",
    date: "May 15, 2026",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=900&auto=format&fit=crop",
  },
];

/* ================= FAQ ================= */
export const FAQS = [
  {
    question: "How do I book an appointment?",
    answer:
      "Use the online booking form on our Home or Contact page, or call us directly — we'll confirm your appointment within one business hour.",
  },
  {
    question: "Do you offer 24/7 emergency care?",
    answer:
      "Yes. Our emergency line is staffed around the clock for urgent and critical situations. Call us anytime, day or night.",
  },
  {
    question: "What wellness plans do you offer?",
    answer:
      "We offer Basic, Premium, and Complete Care plans, each covering a mix of exams, vaccinations, dental cleaning, and diagnostics. Choose monthly or yearly billing.",
  },
  {
    question: "Can I buy pet food and supplies in-store?",
    answer:
      "Absolutely — visit our Shop page to browse food, grooming products, toys, and essentials, all available for pickup at our clinic.",
  },
  {
    question: "Which pets do you treat?",
    answer:
      "Our vets treat dogs, cats, and small mammals. Contact us if you have a question about a specific species before booking.",
  },
];

/* ================= BRAND PARTNERS ================= */
export const BRAND_PARTNERS = [
  "Royal Canin",
  "Hill's Pet",
  "Banfield",
  "PetSmart",
  "Zoetis",
  "Purina",
];

/* ================= AVAILABLE SERVICES FOR BOOKING FORM ================= */
export const BOOKING_SERVICES = SERVICES.map((s) => s.title);

export const SHOP_ICON_MAP: Record<string, LucideIcon> = {
  Food: Bone,
  Essentials: ShoppingBag,
  Grooming: Bath,
  Toys: Dumbbell,
  Comfort: Home,
};
