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
  {
    id: "sofa-3-lugares-comfort",
    name: "Sofá 3 Lugares Comfort",
    description: "Sofá confortável de 3 lugares com estofado em tecido de alta qualidade. Perfeito para sala de estar.",
    price: 1299.99,
    originalPrice: 1599.99,
    category: "Sofás",
    images: [
      "/placeholder.svg?height=400&width=600&text=Sofá+3+Lugares",
      "/placeholder.svg?height=400&width=600&text=Sofá+Lateral",
      "/placeholder.svg?height=400&width=600&text=Sofá+Detalhe",
    ],
    inStock: true,
    isNew: true,
    materials: ["Tecido", "Espuma D33", "Madeira"],
    dimensions: { width: 200, height: 85, depth: 90 },
    weight: 45,
    colors: ["Cinza", "Bege", "Azul"],
  },
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
    id: "guarda-roupa-6-portas",
    name: "Guarda-Roupa 6 Portas",
    description: "Guarda-roupa espaçoso com 6 portas e gavetas internas. Ideal para quartos grandes.",
    price: 1899.99,
    originalPrice: 2299.99,
    category: "Guarda-Roupas",
    images: [
      "/armario02.png?height=400&width=600&text=Guarda-Roupa+6+Portas",
      "/armario03.png?height=400&width=600&text=Interior+Guarda-Roupa",
    ],
    inStock: true,
    materials: ["MDF", "Dobradiças Metálicas"],
    dimensions: { width: 270, height: 220, depth: 60 },
    weight: 80,
    colors: ["Branco", "Carvalho", "Preto"],
  },
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
  {
    id: "estante-livros-5-prateleiras",
    name: "Estante para Livros 5 Prateleiras",
    description: "Estante moderna com 5 prateleiras ajustáveis. Ideal para organizar livros e decoração.",
    price: 329.99,
    category: "Estantes",
    images: ["/placeholder.svg?height=400&width=600&text=Estante+5+Prateleiras"],
    inStock: true,
    isNew: true,
    materials: ["MDP", "Fita de Borda"],
    dimensions: { width: 80, height: 180, depth: 30 },
    weight: 25,
  },
  {
    id: "mesa-centro-vidro",
    name: "Mesa de Centro em Vidro",
    description: "Mesa de centro moderna com tampo de vidro temperado e base em metal cromado.",
    price: 399.99,
    category: "Mesas",
    images: ["/placeholder.svg?height=400&width=600&text=Mesa+Centro+Vidro"],
    inStock: true,
    isNew: true,
    materials: ["Vidro Temperado", "Metal Cromado"],
    dimensions: { width: 100, height: 45, depth: 60 },
    weight: 18,
  },
  {
    id: "sofa-2-lugares-moderno",
    name: "Sofá 2 Lugares Moderno",
    description: "Sofá compacto de 2 lugares com design contemporâneo. Ideal para apartamentos pequenos.",
    price: 899.99,
    originalPrice: 1199.99,
    category: "Sofás",
    images: ["/placeholder.svg?height=400&width=600&text=Sofá+2+Lugares"],
    inStock: true,
    materials: ["Tecido", "Espuma D28", "Madeira"],
    dimensions: { width: 140, height: 85, depth: 90 },
    weight: 35,
    colors: ["Azul", "Verde", "Cinza"],
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
    weight: 120,
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
    id: "promo-guarda-roupa",
    productId: "guarda-roupa-6-portas",
    discount: 17,
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

    // Check if product has an active promotion
    const hasActivePromotion = promotions.some((promotion) => promotion.productId === product.id && promotion.isActive)

    return hasDiscountPrice || hasActivePromotion
  })
}

export function getCategories(): string[] {
  return [...new Set(products.map((product) => product.category))]
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}

export function getPromotionByProductId(productId: string): Promotion | undefined {
  return promotions.find((promotion) => promotion.productId === productId && promotion.isActive)
}
