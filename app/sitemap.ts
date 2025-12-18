import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://carvalhomoveisoficial.com.br',
      lastModified: new Date(),
    },
    {
      url: 'https://carvalhomoveisoficial.com.br/produtos',
      lastModified: new Date(),
    },
    {
      url: 'https://carvalhomoveisoficial.com.br/contato',
      lastModified: new Date(),
    },
  ]
}
