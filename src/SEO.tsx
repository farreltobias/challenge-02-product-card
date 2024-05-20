import { Helmet } from 'react-helmet'
import imageUri from '/sofa.png'

const meta = {
  title: 'React Product Card',
  description:
    "A product card with 3D design to see all the perspectives of that lovely sofa! Inspired by the #boraCodar's challenges by Rocketseat!",
  canonical: 'https://product-card.farrel.tech/',
  image: imageUri,
  charset: 'utf-8',
  keywords:
    'react,product,card,sofa,couch,pink,Margot,velvet,farrel,farreldev,farrel.tech,rocketseat,challenge',
  og: {
    site_name: 'farrel.tech',
    type: 'article',
  },
  twitter: {
    site: '@farrelTech',
    card: 'summary_large_image',
  },
} as const

export const SEO: React.FC = () => {
  const {
    title,
    description,
    canonical,
    charset,
    image,
    og,
    twitter,
    keywords,
  } = meta

  return (
    <Helmet>
      <title lang="pt-BR">{title}</title>
      <link rel="canonical" href={canonical} />

      <meta charSet={charset} lang="pt-BR" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:site_name" content={og.site_name} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
