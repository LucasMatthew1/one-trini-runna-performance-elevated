import velocity from "@/assets/p-velocity-shoe.jpg";
import trail from "@/assets/p-trail-shoe.jpg";
import short from "@/assets/p-split-short.jpg";
import tee from "@/assets/p-seamless-tee.jpg";
import windbreaker from "@/assets/p-windbreaker.jpg";
import tights from "@/assets/p-tights.jpg";
import bands from "@/assets/p-bands.jpg";
import vest from "@/assets/p-vest.jpg";
import jersey from "@/assets/p-jersey.jpg";
import cap from "@/assets/p-cap.jpg";
import hydration from "@/assets/p-hydration.jpg";
import socks from "@/assets/p-socks.jpg";
import storyRoad from "@/assets/story-road.jpg";
import storyStretch from "@/assets/story-stretch.jpg";
import storyFabric from "@/assets/story-fabric.jpg";

export type CategoryId =
  | "shoes"
  | "apparel"
  | "training"
  | "team"
  | "accessories";

export const CATEGORIES: { id: CategoryId | "all"; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "shoes", label: "Running Shoes" },
  { id: "apparel", label: "Running Apparel" },
  { id: "training", label: "Training & Performance Gear" },
  { id: "team", label: "Team & Field Sport" },
  { id: "accessories", label: "Accessories" },
];

export type Product = {
  slug: string;
  name: string;
  descriptor: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  category: CategoryId;
  badge?: string;
  image: string;
  hoverImage: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  benefits: string[];
  technology: string;
  materials: string;
  fit: string;
  care: string;
};

const apparelSizes = ["XS", "S", "M", "L", "XL", "2XL"];
const shoeSizes = ["7", "8", "9", "10", "11", "12", "13"];
const oneSize = ["One Size"];

const BLACK = { name: "Core Black", hex: "#111111" };
const RED = { name: "Performance Red", hex: "#D32235" };
const GREY = { name: "Storm Grey", hex: "#8A8A8E" };
const WHITE = { name: "Chalk White", hex: "#F2F2F0" };

export const PRODUCTS: Product[] = [
  {
    slug: "velocity-pro-racer",
    name: "Velocity Pro Racer",
    descriptor: "Carbon-plated race day shoe",
    price: 189,
    compareAt: 215,
    rating: 4.9,
    reviews: 214,
    category: "shoes",
    badge: "Race Day",
    image: velocity,
    hoverImage: storyRoad,
    gallery: [velocity, storyRoad, storyFabric],
    colors: [BLACK, RED],
    sizes: shoeSizes,
    description:
      "Built for the last 5K of your marathon. A carbon-fibre propulsion plate sits between two layers of supercritical foam for a ride that feels like it wants to run faster than you do.",
    benefits: [
      "Carbon propulsion plate returns energy on every toe-off",
      "212g in a men's US 9 — barely there on the foot",
      "Breathable engineered mesh keeps heat out over long distance",
    ],
    technology:
      "TR-PLATE carbon propulsion system with dual-density supercritical midsole foam, tuned for a 6mm heel-to-toe drop.",
    materials:
      "Recycled engineered mesh upper (68% recycled content), supercritical nitrogen-infused EVA midsole, high-abrasion rubber outsole pods.",
    fit: "True to size with a snug race fit through the midfoot. Wide feet should consider a half size up.",
    care: "Air dry only. Wipe the upper with a damp cloth and mild soap. Never machine wash or tumble dry.",
  },
  {
    slug: "trini-trail-gtx",
    name: "Trini Trail GTX",
    descriptor: "All-terrain trail runner",
    price: 165,
    rating: 4.7,
    reviews: 132,
    category: "shoes",
    image: trail,
    hoverImage: storyRoad,
    gallery: [trail, storyRoad, storyFabric],
    colors: [BLACK, GREY],
    sizes: shoeSizes,
    description:
      "Hills, gravel, mud, rain. A protective all-terrain runner with a 4mm lugged outsole and a water-resistant shell that keeps moving when the weather doesn't cooperate.",
    benefits: [
      "4mm multi-directional lugs for grip on loose terrain",
      "Water-resistant shell with drainage ports",
      "Rock plate underfoot for technical descents",
    ],
    technology:
      "GRIP-X rubber compound outsole, TPU rock plate, and a gusseted tongue that keeps debris out.",
    materials:
      "Abrasion-resistant ripstop upper with welded TPU overlays, EVA midsole, GRIP-X rubber outsole.",
    fit: "Slightly roomier in the toe box than the Velocity Pro. Order your usual size.",
    care: "Rinse mud off with cool water, remove insoles and air dry away from direct heat.",
  },
  {
    slug: "aero-split-short",
    name: "Aero Split Short",
    descriptor: "3\" racing split short",
    price: 62,
    rating: 4.8,
    reviews: 98,
    category: "apparel",
    badge: "Best Seller",
    image: short,
    hoverImage: storyStretch,
    gallery: [short, storyStretch, storyFabric],
    colors: [BLACK, RED, GREY],
    sizes: apparelSizes,
    description:
      "A featherweight split short with a bonded waistband that never rides or chafes. Built for tempo work and race day in tropical heat.",
    benefits: [
      "Bonded waistband with internal key pocket",
      "Split hem for full stride range",
      "Quick-dry woven shell with a liner brief",
    ],
    technology: "AIRFLOW woven shell with laser-perforated venting panels.",
    materials: "88% recycled polyester, 12% elastane. Liner: 92% nylon, 8% elastane.",
    fit: "Athletic race fit. Size up for a relaxed everyday feel.",
    care: "Machine wash cold with like colours, hang dry. No fabric softener.",
  },
  {
    slug: "flow-seamless-tee",
    name: "Flow Seamless Tee",
    descriptor: "Seamless knit training tee",
    price: 58,
    rating: 4.6,
    reviews: 176,
    category: "apparel",
    image: tee,
    hoverImage: storyFabric,
    gallery: [tee, storyFabric, storyStretch],
    colors: [BLACK, WHITE, RED],
    sizes: apparelSizes,
    description:
      "Knitted in one piece so there are no side seams to rub. Body-mapped mesh zones sit exactly where you sweat most.",
    benefits: [
      "Zero side seams — no chafing on long efforts",
      "Body-mapped ventilation across the back and underarm",
      "Odour-resistant finish for back-to-back sessions",
    ],
    technology: "SEAMLOCK circular knit construction with body-mapped mesh zoning.",
    materials: "54% recycled nylon, 38% polyester, 8% elastane.",
    fit: "Slim performance fit that skims the body without clinging.",
    care: "Machine wash cold, hang dry. Avoid ironing the mesh panels.",
  },
  {
    slug: "storm-shell-windbreaker",
    name: "Storm Shell Windbreaker",
    descriptor: "Packable wind and rain shell",
    price: 148,
    compareAt: 175,
    rating: 4.9,
    reviews: 87,
    category: "apparel",
    badge: "New",
    image: windbreaker,
    hoverImage: storyRoad,
    gallery: [windbreaker, storyRoad, storyFabric],
    colors: [BLACK, RED],
    sizes: apparelSizes,
    description:
      "A shell that packs into its own chest pocket and disappears until the sky opens. Fully taped seams, articulated sleeves, reflective trim front and back.",
    benefits: [
      "Packs into its own pocket — 118g total",
      "Taped seams and a water-repellent finish",
      "360° reflective detailing for night runs",
    ],
    technology: "STORMLITE 2.5-layer ripstop with a PFC-free DWR finish.",
    materials: "100% recycled ripstop nylon with PU laminate backing.",
    fit: "Regular fit designed to layer over a long sleeve.",
    care: "Machine wash cold, tumble dry low to reactivate the DWR finish.",
  },
  {
    slug: "compression-long-tight",
    name: "Stride Compression Tight",
    descriptor: "Graduated compression long tight",
    price: 96,
    rating: 4.7,
    reviews: 143,
    category: "apparel",
    image: tights,
    hoverImage: storyStretch,
    gallery: [tights, storyStretch, storyFabric],
    colors: [BLACK, GREY],
    sizes: apparelSizes,
    description:
      "Graduated compression from ankle to thigh to support blood flow through long sessions, with a high sculpted waistband that stays put.",
    benefits: [
      "Graduated compression zoning supports fatigued muscle",
      "Sculpted high waistband with dual side pockets",
      "Four-way stretch with full opacity in every position",
    ],
    technology: "COMPRESS-4 knit with graduated pressure mapping.",
    materials: "76% recycled polyester, 24% elastane.",
    fit: "Compression fit. Take your usual size for full support.",
    care: "Machine wash cold inside out, hang dry.",
  },
  {
    slug: "stride-band-set",
    name: "Stride Band Set",
    descriptor: "Three-tier resistance band set",
    price: 44,
    rating: 4.5,
    reviews: 64,
    category: "training",
    image: bands,
    hoverImage: storyStretch,
    gallery: [bands, storyStretch],
    colors: [RED, BLACK],
    sizes: oneSize,
    description:
      "Light, medium and heavy bands for activation before you run and strength work after. Fabric-wrapped so they never snap back on the skin.",
    benefits: [
      "Three resistance levels in one set",
      "Fabric-wrapped, non-roll construction",
      "Packs flat into a mesh travel pouch",
    ],
    technology: "Layered latex core with a woven fabric jacket.",
    materials: "Natural latex core, polyester-cotton jacket, mesh carry pouch.",
    fit: "One size. Suitable for glute, hip and shoulder work.",
    care: "Wipe clean and store away from direct sunlight.",
  },
  {
    slug: "tempo-weighted-vest",
    name: "Tempo Weighted Vest",
    descriptor: "Adjustable 10kg training vest",
    price: 129,
    rating: 4.6,
    reviews: 41,
    category: "training",
    image: vest,
    hoverImage: storyRoad,
    gallery: [vest, storyRoad],
    colors: [BLACK, RED],
    sizes: oneSize,
    description:
      "Load up to 10kg in 0.5kg increments for hill repeats, ruck sessions and strength circuits. Contoured plates sit close so nothing bounces.",
    benefits: [
      "Adjustable 2–10kg load in 0.5kg increments",
      "Contoured plates with a bounce-free harness",
      "Breathable spacer mesh back panel",
    ],
    technology: "LOCKLOAD harness with dual side compression straps.",
    materials: "1000D nylon shell, spacer mesh lining, coated steel weights.",
    fit: "One size, adjustable from chest 86–122cm.",
    care: "Remove weights before wiping the shell clean. Do not submerge.",
  },
  {
    slug: "field-squad-jersey",
    name: "Field Squad Jersey",
    descriptor: "Team-ready performance jersey",
    price: 72,
    rating: 4.4,
    reviews: 58,
    category: "team",
    image: jersey,
    hoverImage: storyFabric,
    gallery: [jersey, storyFabric],
    colors: [RED, BLACK, WHITE],
    sizes: apparelSizes,
    description:
      "Cut for field sport and club training. Open-hole mesh through the body, reinforced shoulders, and a print base ready for club numbers.",
    benefits: [
      "Open-hole mesh dumps heat fast",
      "Reinforced shoulder seams for contact",
      "Print-ready panels for team numbering",
    ],
    technology: "DRYFLOW open-hole knit with moisture transport finish.",
    materials: "100% recycled polyester open-hole knit.",
    fit: "Regular team fit with room to layer a base.",
    care: "Machine wash cold, hang dry. Do not iron printed areas.",
  },
  {
    slug: "runna-lite-cap",
    name: "Runna Lite Cap",
    descriptor: "Featherweight run cap",
    price: 38,
    rating: 4.8,
    reviews: 121,
    category: "accessories",
    badge: "Best Seller",
    image: cap,
    hoverImage: storyStretch,
    gallery: [cap, storyStretch],
    colors: [BLACK, WHITE],
    sizes: oneSize,
    description:
      "48g of shade. A soft unstructured crown, a moisture-wicking sweatband, and a brim that holds shape through sweat and rain.",
    benefits: [
      "48g featherweight build",
      "Wicking sweatband with reflective rear tab",
      "Packable brim that springs back to shape",
    ],
    technology: "AIRFLOW ripstop crown with laser-cut vents.",
    materials: "100% recycled ripstop polyester with elastic rear closure.",
    fit: "One size with an elastic rear panel, fits 55–61cm.",
    care: "Hand wash cool and air dry.",
  },
  {
    slug: "hydro-run-belt",
    name: "Hydro Run Belt",
    descriptor: "Dual-flask hydration belt",
    price: 54,
    rating: 4.5,
    reviews: 76,
    category: "accessories",
    image: hydration,
    hoverImage: storyRoad,
    gallery: [hydration, storyRoad],
    colors: [BLACK],
    sizes: oneSize,
    description:
      "Two 300ml soft flasks in a bounce-free stretch belt, plus a zip pocket that swallows a phone, gels and a key.",
    benefits: [
      "Two 300ml flasks included",
      "Bounce-free stretch woven belt",
      "Full-length zip pocket fits a large phone",
    ],
    technology: "STAYPUT silicone-gripped waistband with flat-lock seams.",
    materials: "Recycled stretch woven nylon, BPA-free TPU flasks.",
    fit: "Adjustable from waist 66–107cm.",
    care: "Hand wash the belt, rinse flasks after every run.",
  },
  {
    slug: "distance-crew-sock",
    name: "Distance Crew Sock",
    descriptor: "Cushioned crew running sock",
    price: 22,
    rating: 4.7,
    reviews: 203,
    category: "accessories",
    image: socks,
    hoverImage: storyFabric,
    gallery: [socks, storyFabric],
    colors: [BLACK, WHITE],
    sizes: ["S", "M", "L"],
    description:
      "Targeted cushioning under the heel and forefoot, mesh through the arch, and a seamless toe that keeps long miles blister-free.",
    benefits: [
      "Zoned cushioning at heel and forefoot",
      "Seamless toe closure",
      "Arch compression band holds the sock in place",
    ],
    technology: "ZONEKNIT cushioning with mesh venting channels.",
    materials: "58% recycled polyester, 38% nylon, 4% elastane.",
    fit: "S (UK 3–5), M (UK 6–8), L (UK 9–12).",
    care: "Machine wash cold, tumble dry low.",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, count = 4) {
  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const rest = PRODUCTS.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCategory, ...rest].slice(0, count);
}

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
