import { Product, ProductCategory } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'sp-bp-01',
    name: 'Digital Blood Pressure Monitor',
    subtitle: 'Dual-user memory with irregular heartbeat detection',
    category: 'Medical Equipment',
    price: 2299,
    originalPrice: 2899,
    discountPercentage: 21,
    rating: 4.8,
    reviewCount: 342,
    image: '/src/assets/images/product_bp_monitor_1791920472180.jpg',
    description: 'Clinically validated upper-arm blood pressure monitor equipped with IntelliSense inflation, high-contrast backlit LCD, and 2x99 readings memory log for dual-user cardiovascular tracking.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Measurement Range': 'Pressure: 0-299 mmHg, Pulse: 40-180 bpm',
      'Accuracy': 'Pressure: ±3 mmHg, Pulse: ±5%',
      'Cuff Circumference': '22 cm to 42 cm (Wide Range)',
      'Power Source': '4x AA Alkaline batteries & Type-C DC port',
      'Warranty': '3 Years Manufacturer Warranty'
    },
    highlights: [
      'Clinically validated accuracy standard',
      'Automated cuff wrap guide sensor',
      'Hypertension indicator bar',
      'One-touch automatic measurement'
    ],
    manufacturer: 'Shipaf HealthTech Diagnostics Ltd.'
  },
  {
    id: 'sp-th-02',
    name: 'Infrared Digital Thermometer',
    subtitle: 'Non-contact forehead & object 1-second scanning',
    category: 'Medical Equipment',
    price: 899,
    originalPrice: 1299,
    discountPercentage: 31,
    rating: 4.9,
    reviewCount: 512,
    image: '/src/assets/images/product_digital_thermometer_1791920472098.jpg',
    description: 'Medical-grade high-precision non-contact infrared thermometer designed for instantaneous 1-second temperature screening with silent night mode and color-coded fever warning display.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Detection Range': '32.0°C - 42.9°C (89.6°F - 109.2°F)',
      'Measuring Distance': '1 - 5 cm non-contact',
      'Response Time': '≤ 1.0 second',
      'Display': 'Color Backlit LCD with Fever Alarm',
      'Warranty': '2 Years Replacement Guarantee'
    },
    highlights: [
      'Zero skin contact hygienic measurement',
      'Mute function for sleeping infants',
      'Stores up to 32 previous readings',
      'Automatic auto-off power preservation'
    ],
    manufacturer: 'Apex Thermocare Instruments'
  },
  {
    id: 'sp-fa-03',
    name: 'Comprehensive Emergency First Aid Kit',
    subtitle: '48-piece essential trauma & wound care supplies',
    category: 'First Aid',
    price: 749,
    originalPrice: 999,
    discountPercentage: 25,
    rating: 4.7,
    reviewCount: 218,
    image: '/src/assets/images/product_first_aid_kit_1791920472499.jpg',
    description: 'Durable, waterproof case containing sterilized sterile gauze swabs, antiseptic wipes, medical adhesive tape, stainless scissors, burn gel sachets, safety pins, and emergency CPR mask.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Total Components': '48 Sterilized Healthcare Items',
      'Case Material': 'Water-resistant High-Density Polymer',
      'Shelf Life of Consumables': '36 Months from MFG date',
      'Standard': 'ISO 13485 & Red Cross First-Aid Guideline'
    },
    highlights: [
      'Compact organized interior partitions',
      'Hospital-grade antiseptic & dressing items',
      'Quick emergency instruction booklet inside',
      'Lightweight and travel-ready'
    ],
    manufacturer: 'Shipaf SafeCare Solutions'
  },
  {
    id: 'sp-ox-04',
    name: 'Fingertip Pulse Oximeter OLED',
    subtitle: 'Continuous SpO2 & pulse rate display with perfusion index',
    category: 'Medical Equipment',
    price: 1199,
    originalPrice: 1599,
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 189,
    image: '/src/assets/images/product_pulse_oximeter_1791920685546.jpg',
    description: 'Compact fingertip pulse oximeter featuring dual-color multi-directional OLED screen that accurately calculates blood oxygen saturation (SpO2) and pulse strength in real-time.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'SpO2 Range': '70% - 99% (±2% accuracy)',
      'Pulse Rate Range': '30 - 240 bpm (±1 bpm)',
      'Screen': '4-Direction Rotatable Dual OLED',
      'Auto Power Off': 'After 8 seconds of idle finger removal',
      'Warranty': '1 Year Full Warranty'
    },
    highlights: [
      'Plethysmograph wave visualizer',
      'Hypoallergenic soft silicone finger chamber',
      'Includes lanyard and protective travel pouch',
      'Luminescent display readable in low light'
    ],
    manufacturer: 'AeroPulse Bio-Medical'
  },
  {
    id: 'sp-vm-05',
    name: 'Vita-Complex Daily Multivitamins',
    subtitle: '60+ essential micronutrients, zinc & botanical antioxidants',
    category: 'Vitamins and Supplements',
    price: 550,
    originalPrice: 720,
    discountPercentage: 24,
    rating: 4.9,
    reviewCount: 420,
    image: '/src/assets/images/product_multivitamins_1791920685848.jpg',
    description: 'Bioavailable daily multivitamin and mineral complex formulated to support immunity, cellular energy, heart vitality, and overall metabolic health without artificial fillers.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Capsule Count': '120 Vegetarian Capsules (4-Month Supply)',
      'Key Ingredients': 'Vitamin C, D3, B12, Zinc, Iron, Ashwagandha',
      'Dosage': '1 capsule daily after a morning meal',
      'Certification': 'GMP Certified, FSSAI Approved, Non-GMO'
    },
    highlights: [
      '100% RDA of vitamins C, D3, and Zinc',
      'Enhanced absorption with piperine extract',
      'Zero sugar, gelatin-free vegetarian casing',
      'Third-party heavy metal tested'
    ],
    manufacturer: 'Shipaf Nutraceuticals Lab'
  },
  {
    id: 'sp-ws-06',
    name: 'Precision Digital Body Weighing Scale',
    subtitle: 'Tempered safety glass with 4 high-gauge strain sensors',
    category: 'Healthcare Essentials',
    price: 1450,
    originalPrice: 1950,
    discountPercentage: 26,
    rating: 4.7,
    reviewCount: 164,
    image: '/src/assets/images/product_weighing_scale_1791920684857.jpg',
    description: 'Ultra-slim step-on digital scale manufactured with 6mm shatterproof tempered glass, delivering consistent 50g graduation accuracy with clean blue backlight reading.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Capacity': '5 kg to 180 kg (400 lbs)',
      'Graduation': '50 g (0.1 lb)',
      'Platform': '280 x 280 mm Tempered Glass',
      'Units': 'Kilograms (kg) / Pounds (lb) toggle',
      'Warranty': '24 Months'
    },
    highlights: [
      'Instant Step-On sensing technology',
      'Overload and low battery indicators',
      'Non-skid silicone base feet',
      'Energy efficient auto-calibration'
    ],
    manufacturer: 'MetricScale Precision Co.'
  },
  {
    id: 'sp-sm-07',
    name: '3-Ply Surgical Protective Face Masks (50 Pack)',
    subtitle: 'BFE ≥ 99% certified meltblown bacterial filtration',
    category: 'Healthcare Essentials',
    price: 299,
    originalPrice: 450,
    discountPercentage: 34,
    rating: 4.8,
    reviewCount: 890,
    image: '/src/assets/images/product_first_aid_kit_1791920472499.jpg',
    description: 'Certified 3-layer surgical grade face masks with high filtration meltblown middle layer, soft latex-free ear loops, and adjustable nose wire for leak-free contouring.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Pack Size': 'Box of 50 Disposables',
      'Filtration': 'Bacterial Filtration Efficiency (BFE) ≥ 99%',
      'Standard': 'EN 14683 Type II / BIS Certified',
      'Color': 'Classic Surgical Blue'
    },
    highlights: [
      'Triple layered fluid-resistant spunbond fabric',
      'Ultra-breathable low breathing resistance',
      'Comfortable skin-friendly non-woven lining',
      'Individual batch sealed hygienic packaging'
    ],
    manufacturer: 'PureShield MediFabrics'
  },
  {
    id: 'sp-hs-08',
    name: 'Hospital-Grade Hand Sanitizer (500 ml)',
    subtitle: '75% Isopropyl Alcohol with moisturizing Aloe Vera',
    category: 'Personal Care',
    price: 220,
    originalPrice: 280,
    discountPercentage: 21,
    rating: 4.7,
    reviewCount: 310,
    image: '/src/assets/images/product_digital_thermometer_1791920472098.jpg',
    description: 'Broad-spectrum antimicrobial rub formulated with 75% pharmaceutical alcohol to eliminate 99.99% of germs and pathogens while keeping hands nourished with vitamin E.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Volume': '500 ml with calibrated pump dispenser',
      'Alcohol Concentration': '75% v/v Isopropyl Alcohol IP',
      'Form': 'Quick-drying non-sticky gel',
      'Fragrance': 'Mild refreshing eucalyptus'
    },
    highlights: [
      'Kills 99.99% of bacteria and viruses in 15 seconds',
      'Formulated with glycerin & aloe vera',
      'WHO recommended handrub formulation',
      'Spill-proof pump lock mechanism'
    ],
    manufacturer: 'Shipaf DermaCare Labs'
  },
  {
    id: 'sp-hw-09',
    name: 'Orthopedic Rubber Hot Water Bag',
    subtitle: 'Leak-proof brass threaded cap for targeted muscle relief',
    category: 'Healthcare Essentials',
    price: 380,
    originalPrice: 499,
    discountPercentage: 24,
    rating: 4.6,
    reviewCount: 145,
    image: '/src/assets/images/product_first_aid_kit_1791920472499.jpg',
    description: 'High-density natural vulcanized rubber hot water bottle designed for joint aches, muscular cramps, sports injuries, and soothing thermal back therapy.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Capacity': '2.0 Liters',
      'Material': 'Natural Rubber with double-sided ribbed texture',
      'Stopper': 'Brass-embedded threaded safety plug',
      'Safety': 'Burst-tested up to 5 bar'
    },
    highlights: [
      'Retains heat for up to 6 hours',
      'Ribbed exterior prevents accidental skin burning',
      'Easy filling wide aperture neck',
      '100% leak-proof hermetic seal'
    ],
    manufacturer: 'ThermaRelief Healthcare'
  },
  {
    id: 'sp-rx-10',
    name: 'Paracetamol 650mg Tablets (15 Strips)',
    subtitle: 'Antipyretic & analgesic pain relief — Prescription required',
    category: 'Medicines',
    price: 42,
    originalPrice: 50,
    discountPercentage: 16,
    rating: 4.9,
    reviewCount: 672,
    image: '/src/assets/images/product_multivitamins_1791920685848.jpg',
    description: 'Scheduled prescription antipyretic medication used for reducing fever and providing prompt relief from mild to moderate body ache, headache, and postoperative discomfort.',
    inStock: true,
    requiresPrescription: true,
    specs: {
      'Active Formulation': 'Paracetamol IP 650 mg per tablet',
      'Pack Size': 'Blister strip of 15 tablets',
      'Schedule': 'Schedule H Prescription Drug',
      'Verification': 'Registered Pharmacist dispensing only'
    },
    highlights: [
      'Rapid-action fast dissolving formula',
      'Dispensed strictly under registered pharmacist supervision',
      'Requires valid medical practitioner prescription upload',
      'Quality verified batch release'
    ],
    manufacturer: 'Biomark Pharmaceuticals'
  },
  {
    id: 'sp-nb-11',
    name: 'Ultrasonic Compressor Nebulizer System',
    subtitle: 'Quiet particle aerosolization for respiratory care',
    category: 'Medical Equipment',
    price: 2150,
    originalPrice: 2850,
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 132,
    image: '/src/assets/images/product_bp_monitor_1791920472180.jpg',
    description: 'High-efficiency piston compressor nebulizer for pediatric and adult bronchial therapy. Produces ultra-fine aerosol particles (MMAD ≤ 3µm) for deep airway medicine delivery.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Particle Size': 'MMAD ≤ 3.0 microns',
      'Nebulization Rate': '≥ 0.2 ml/min',
      'Noise Level': '≤ 58 dB quiet operation',
      'Included': 'Adult mask, Pediatric mask, Mouthpiece, 5 Filters',
      'Warranty': '2 Years'
    },
    highlights: [
      'Delivers targeted medication straight into lungs',
      'Continuous duty heavy-duty copper motor',
      'Ergonomic handle and integrated cup holder',
      'Easy to sanitize and sterilize'
    ],
    manufacturer: 'AeroBreathe Respiratory'
  },
  {
    id: 'sp-kb-12',
    name: 'Orthopedic Patella Stabilizer Knee Support',
    subtitle: 'Breathable compression sleeve with lateral side stabilizers',
    category: 'Personal Care',
    price: 850,
    originalPrice: 1100,
    discountPercentage: 23,
    rating: 4.7,
    reviewCount: 205,
    image: '/src/assets/images/product_weighing_scale_1791920684857.jpg',
    description: 'Anatomically contoured 3D circular knit knee sleeve featuring silicone gel patella cushioning ring and flexible double spring stays for stability during rehabilitation or sports.',
    inStock: true,
    requiresPrescription: false,
    specs: {
      'Size Options': 'Medium (38-42cm), Large (42-46cm), XL (46-50cm)',
      'Material': 'Polyamide, Spandex, Medical Silicone',
      'Compression Class': 'Class II (20-30 mmHg)',
      'Color': 'Charcoal Slate with Medical Teal Stitch'
    },
    highlights: [
      'Absorbs shock on patella cartilage',
      'Breathable sweat-wicking knit fabric',
      'Silicone anti-slip inner grip band',
      'Permits natural joint mobility'
    ],
    manufacturer: 'KinetiCare Orthotics'
  }
];

export const CATEGORIES_DATA: {
  name: ProductCategory;
  description: string;
  itemCount: number;
  iconName: string;
  badge?: string;
}[] = [
  {
    name: 'Medicines',
    description: 'Verified pharmaceutical drugs, fever relief & chronic condition therapies.',
    itemCount: 420,
    iconName: 'Pill',
    badge: 'Rx Verified'
  },
  {
    name: 'Medical Equipment',
    description: 'Digital diagnostic monitors, nebulizers, thermometers & pulse oximeters.',
    itemCount: 86,
    iconName: 'Activity'
  },
  {
    name: 'First Aid',
    description: 'Emergency trauma kits, wound dressings, sterile bandages & trauma gauze.',
    itemCount: 64,
    iconName: 'ShieldAlert'
  },
  {
    name: 'Healthcare Essentials',
    description: 'Protective face masks, digital scales, hot water bags & daily care supplies.',
    itemCount: 115,
    iconName: 'HeartPulse'
  },
  {
    name: 'Personal Care',
    description: 'Orthopedic braces, hospital-grade sanitizers, skincare & wellness.',
    itemCount: 92,
    iconName: 'Sparkles'
  },
  {
    name: 'Vitamins and Supplements',
    description: 'Micronutrient blends, immunity boosters, omega oils & daily vitality.',
    itemCount: 78,
    iconName: 'Leaf'
  }
];
