export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  images: string[]
  inStock: boolean
  isNew?: boolean
  materials?: string[]
  dimensions?: {
    width: number
    height: number
    depth: number
  }
  weight?: number
  colors?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  image?: string
}

// Added missing promotion interface
export interface Promotion {
  id: string
  productId: string
  discount: number
  isActive: boolean
  startDate?: Date
  endDate?: Date
}

// Sample products data
const products: Product[] = [

  //Todos os tipos de Sofás
  {
    id: "sofa-Denver",
    name: "Sofá Denver",
    description: "O Sofá Denver 230cm une conforto e estilo em um design moderno. Possui assento em espuma D28 soft com pillow de 18 cm, molas Bonnel e almofadas em fibra de silicone, garantindo maciez e durabilidade. Ideal para deixar sua sala elegante e aconchegante.",
    price: 2399.00,
    category: "Sofás",
    images: [
      "/images/products/sofas/sofa_denver_02.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
      "/images/products/sofas/sofa_denver_01.png?height=400&width=600&text=Sofá+Lateral",
    ],
    inStock: true,
    isNew: true,
    materials: ["Molas Bonnel", "Espuma D28", "Pés de Madeira"],
    dimensions: { width: 230, height: 95, depth: 90 },
    colors: ["Cinza", "Bege"],
  },
   {
    id: "sofa-cama-belize",
    name: "Sofá Cama Belize",
    description: "O Sofá-Cama Belize 238cm une conforto e praticidade, com espuma D28 soft, pillow de 18 cm e almofadas em fibras siliconadas. Possui detalhes em couro ecológico, braços com porta-copo e acabamento em linho cambraia, ideal para ambientes modernos e funcionais.",
    price: 3799.99,
    category: "Sofás",
    images: [
      "/images/products/sofas/sofa_belize_01.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
      "/images/products/sofas/sofa_belize_02.png?height=400&width=600&text=Sofá+Lateral",
    ],
    inStock: true,
    isNew: true,
    materials: ["Linho Cambraia", "Espuma D28 soft", "Detalhes em Couro"],
    dimensions: { width: 238, height: 75, depth: 102 },
    colors: ["Bege", "Cinza"],
  },
   {
    id: "sofa-versato",
    name: "Sofá Versato - Solar",
    description: "O Sofá Versato 2,20m oferece conforto e versatilidade, com encosto reclinável, assento em espuma D33 soft e manta siliconada. Conta com molas espiral, estrutura em madeira de reflorestamento e sistema retrátil, ideal para quem busca praticidade e aconchego no dia a dia.",
    price: 2325.00,
    category: "Sofás",
    images: [
      "/images/products/sofas/sofa_versato_01.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
      
    ],
    inStock: true,
    isNew: true,
    materials: ["Pés em Polietileno", "Espuma D33 soft", "Estrutura em Eucalipto"],
    dimensions: { width: 220, height: 75, depth: 123 },
    colors: ["Bege", "Cinza", "Marrom"],
  },
   //Todos os tipos de Mesas
  {
    id: "mesa-jantar-madeira",
    name: "Mesa de Jantar em Madeira Maciça",
    description: "Mesa de jantar para 6 pessoas em madeira maciça com acabamento natural.",
    price: 674.99,
    originalPrice:899.99,
    category: "Mesas",
    images: [
      "/placeholder.svg?height=400&width=600&text=Mesa+Jantar",
      "/placeholder.svg?height=400&width=600&text=Mesa+Detalhe",
    ],
    inStock: true,
    materials: ["Madeira Maciça", "Verniz"],
    dimensions: { width: 160, height: 75, depth: 90 },
    weight: 35,
  },
  {
    id: "mesa-celeste",
    name: "Mesa de Celeste",
    description: "Conjunto de Mesa Celeste 4 Lugares em Freijó com Off White, feito em MDF/MDP, com tampo fixo resistente e design moderno para valorizar sua sala de jantar.",
    price: 1899,
    category: "Mesas",
    images: [
      "/images/products/mesa-celeste1.png?height=400&width=600&text=Mesa+Centro+Vidro",
      "/images/products/mesa-celeste.png?height=400&width=600&text=Mesa+Centro+Vidro",
    ],
    inStock: true,
    isNew: true,
    materials: ["Vidro Temperado", "Metal Cromado"],
    colors: ["Freijó", " Off White"],
    dimensions: { width: 120, height: 80, depth: 90 },
  },
  //Todos os tipos de Cadeiras
  {
    id: "cadeira-escritorio-ergonomica",
    name: "Cadeira de Escritório Ergonômica",
    description: "Cadeira ergonômica com apoio lombar e regulagem de altura. Perfeita para home office.",
    price: 449.99,
    category: "Cadeiras",
    images: ["/placeholder.svg?height=400&width=600&text=Cadeira+Escritório"],
    inStock: false,
    materials: ["Tecido Mesh", "Metal", "Plástico"],
    dimensions: { width: 60, height: 120, depth: 60 },
    weight: 12,
  },
  //Todos os tipos de Guarda-Roupas
  {
    id: "guarda-roupa-virtus",
    name: "Guarda-Roupa Virtus",
    description: "Guarda-roupa espaçoso com 6 portas e gavetas internas. Ideal para quartos grandes.",
    price: 2399.99,
    originalPrice: 2999.99,
    category: "Guarda-Roupas",
    images: [
      "/images/products/Armario/guarda-roupa-virtus-01.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
      "/images/products/Armario/guarda-roupa-virtus-02.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
    ],
    inStock: true,
    materials: ["MDF", "Dobradiças Metálicas"],
    dimensions: { width: 162, height: 236.4, depth: 55.5 },
    colors: ["Branco", "Cumari",],
  },
  {
    id: "guarda-roupa-angra",
    name: "Guarda-Roupa Angra",
    description: "Guarda-roupa Angra com 6 portas e 2 gavetas, oferecendo ótimo espaço interno para organização. Conta com cabideiro em alumínio, prateleira interna e ferragens de qualidade, além de acabamento em pintura UV, puxadores externos e pés elevados, garantindo praticidade, durabilidade e um visual moderno para o quarto.",
    price: 600,
    category: "Guarda-Roupas",
    images: [
      "/images/products/Armario/angra_06_portas_01.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
      "/images/products/Armario/angra_06_portas_02.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
    ],
    inStock: true,
    isNew: true,
    materials: ["MDP"],
    dimensions: { width: 2.19, height: 2.12, depth: 47.70 },
    colors: ["Marrom"],
  },
  {
    id: "guarda-roupa-real",
    name: "Guarda-Roupa Real 4 Portas",
    description: "Guarda-roupa solteiro Real com 4 portas e 2 gavetas, produzido em MDP com acabamento em pintura UV fosca e espelho, ideal para organizar o quarto com praticidade e estilo.",
    price: 600,
    category: "Guarda-Roupas",
    images: [
      "/images/products/Armario/guarda_roupa_real_01.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
      "/images/products/Armario/guarda_roupa_real_02.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
    ],
    inStock: true,
    materials: ["MDP"],
    dimensions: { width: 99, height: 1.80, depth: 40 },
    colors: ["Bege"],
  },
  //Todos os tipos de Balcões
  {
    id: "balcao-lemon",
    name: "Balcão Aéreo Lemon",
    description: "Balcão aéreo Lemon, produzido em MDF, oferecendo resistência, durabilidade e um acabamento moderno que valoriza o ambiente com praticidade e elegância.",
    price: 500,
    category: "Balcões",
    images: [
      "/images/products/balcoes/balcao_lemon_01.png?height=400&width=600&text=Balcao+Lemon",
      "/images/products/balcoes/balcao_lemon_02.png?height=400&width=600&text=Balcao+Lemon",
      "/images/products/balcoes/balcao_lemon_03.png?height=400&width=600&text=Balcao+Lemon",
    ],
    inStock: true,
    isNew: true,
    materials: ["MDF"],
    dimensions: { width: 91, height: 78.7, depth: 43 },
    colors: ["Freijó/chumbo", "Freijó/off-white",],
  },
  {
    id: "balcao-mila",
    name: "Balcão Mila",
    description: "Balcão Mila para fogão cooktop 4 ou 5 bocas, produzido em MDF, com estrutura resistente e acabamento de qualidade. Disponível nas cores Branco, Preto e Avelã, ideal para compor uma cozinha prática e moderna.",
    price: 300,
    category: "Balcões",
    images: [
      "/images/products/balcoes/balcao_mila_01.png?height=400&width=600&text=Balcao+Mila",
      "/images/products/balcoes/balcao_mila_02.png?height=400&width=600&text=Balcao+Mila",
      "/images/products/balcoes/balcao_mila_03.png?height=400&width=600&text=Balcao+Mila",
    ],
    inStock: true,
    isNew: true,
    materials: ["MDF"],
    dimensions: { width: 80, height: 84, depth: 53 },
    colors: ["Avelã", "Branco","Preto"],
  },
  {
    id: "balcao-fit",
    name: "Balcão Fit",
    description: "Balcão Fit para fogão cooktop 4 ou 5 bocas, fabricado em MDF, com estrutura resistente e acabamento moderno. Disponível nas cores Freijó/Off, Branco, Preto, Carvalho/Chumbo e Carvalho Nature, ideal para uma cozinha funcional e elegante.",
    price: 380,
    category: "Balcões",
    images: [
      "/images/products/balcoes/balcao_fit_01.jpg?height=400&width=600&text=Balcao+Fit",
      "/images/products/balcoes/balcao_fit_02.jpg?height=400&width=600&text=Balcao+Fit",
      "/images/products/balcoes/balcao_fit_03.jpg?height=400&width=600&text=Balcao+Fit",
    ],
    inStock: true,
    isNew: true,
    materials: ["MDF"],
    dimensions: { width: 80, height: 84, depth: 53 },
    colors: ["Freijó/Off", "Branco","Preto", "Carvalho/Chumbo", "Carvalho Nature"],
  },
  //Todas os tipos de camas 
  {
    id: "cama-bau-casal",
    name: "Cama Box Baú Casal",
    description: "Conjunto Box Baú Casal + Colchão AirTech Ortobom. Conforto térmico, suporte ideal e baú espaçoso com pistões a gás. A escolha perfeita para quem busca qualidade, durabilidade e organização.",
    price: 1619.99,
    originalPrice: 1799.99,
    category: "Camas",
    images: [
      "/images/products/box_bau_casal1.jpg?height=400&width=600&text=Cama+Box+Casal",
      "/images/products/box_bau_casal.jpg?height=400&width=600&text=Cama+Box+Casal",

    ],
    inStock: true,
    isNew: false,
    materials: ["Madeira", "Molas Ensacadas", "Tecido", "Pistões a Gás"],
    dimensions: { width: 138, height: 65, depth: 188 },
    colors: ["Marrom", "Bege"],
  },
  {
    id: "cama-queen-box",
    name: "Cama Box Queen",
    description: "Conjunto Box Queen com Colchão AirTech: base reforçada e colchão com tecnologia de ventilação que garante conforto, frescor e suporte ideal para noites de sono muito mais tranquilas e revigorantes.",
    price: 1300,
    category: "Camas",
    images: [
      "/images/products/cama_queen.jpg?height=400&width=600&text=Cama+Box+Casal",
    ],
    inStock: true,
    isNew: true,
    materials: ["Madeira", "Molas Ensacadas", "Tecido"],
    dimensions: { width: 158, height: 40, depth: 198 },
    weight: 65,
    colors: ["Marrom", "Bege"],
  },
  {
    id: "cama-infantil-cercado",
    name: "Cama Infantil Montessoriana",
    description: "Linda cama montessoriana, perfeita para o quarto do seu filho! Design moderno e seguro, ideal para o desenvolvimento infantil. Conforto e estilo garantidos!",
    price: 630,
    category: "Camas",
    images: [
      "/images/products/cama_infantil.png?height=400&width=600&text=Cama+Box+Casal",
      "/images/products/cama-infantil1.png?height=400&width=600&text=Cama+Box+Casal",
    ],
    inStock: true,
    isNew: true,
    materials: ["100% MDF", "Grades protetoras"],
    dimensions: { width: 100, height: 36, depth: 195 },
    weight: 65,
    colors: ["Branco", "Freijó"],
  },

]

const promotions: Promotion[] = [
  {
    id: "promo-sofa-comfort",
    productId: "sofa-3-lugares-comfort",
    discount: 18,
    isActive: true,
  },

  {
    id: "promo-sofa-2-lugares",
    productId: "sofa-2-lugares-moderno",
    discount: 25,
    isActive: true,
  },
  {
    id: "promo-mesa-jantar-madeira",
    productId: "mesa-jantar-madeira",
    discount: 25,
    isActive: true,
  },
   {
    id: "promo-cama-bau",
    productId: "cama-bau-casal",
    discount: 10,
    isActive: true,
  },
  
]

export const categories: Category[] = [
  { id: "sofas", name: "Sofás", slug: "sofas", image: "/images/categories/sofas.jpg" },
  { id: "mesas", name: "Mesas", slug: "mesas", image: "/images/categories/mesa1.webp" },
  { id: "cadeiras", name: "Cadeiras", slug: "cadeiras", image: "/images/categories/cadeira.webp" },
  { id: "guarda-roupas", name: "Guarda-Roupas", slug: "guarda-roupas", image: "/images/categories/gurada_roupa.webp" },
  { id: "balcoes", name: "Balcões", slug: "balcoes", image: "/images/categories/balcao.webp" },
  { id: "racks", name: "Racks", slug: "racks", image: "/images/categories/rack_sala.jpg" },
  { id: "camas", name: "Camas", slug: "camas", image: "/images/categories/cama_casal.jpg" },
]

export function getAllProducts(): Product[] {
  return products
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => {
    // Check if product has originalPrice and it's higher than current price
    const hasDiscountPrice = product.originalPrice && product.originalPrice > product.price

    return hasDiscountPrice
  })
}

export function getCategories(): string[] {
  return [...new Set(products.map((product) => product.category))]
}

export function searchProducts(query: string): Product[] {
  if (!query || query.trim() === "") {
    return products
  }

  const lowercaseQuery = query.toLowerCase().trim()

  // Split query into words for better matching
  const queryWords = lowercaseQuery.split(/\s+/)

  return products.filter((product) => {
    const searchableText = `${product.name} ${product.description} ${product.category}`.toLowerCase()

    // Check if all query words are present in the searchable text
    return queryWords.every((word) => searchableText.includes(word))
  })
}

// export function getPromotionByProductId(productId: string): Promotion | undefined {
//   return promotions.find((promotion) => promotion.productId === productId && promotion.isActive)
// }
