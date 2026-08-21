// Portfolio projects — using real images from the "for website" collection.

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const projects = [
  {
    title: 'Bangalore Residence',
    category: 'Interior Design',
    span: 8,
    shadow: true,
    delay: false,
    image: '/images/work/bangalore.jpg',
    video: '',
    description:
      'A contemporary Bangalore residence where clean lines meet warm textures. The design balances modern minimalism with inviting living spaces, featuring bespoke joinery, natural stone finishes and a seamless flow between rooms.',
  },
  {
    title: 'Master Bedroom Suite',
    category: 'Bedroom Design',
    span: 4,
    shadow: false,
    delay: true,
    image: '/images/work/bedroom.jpg',
    video: '',
    description:
      'A serene master bedroom suite designed for restful elegance. Soft neutral tones, layered textiles and carefully considered lighting create a cocoon of comfort, while custom wardrobes and a refined headboard anchor the space.',
  },
  {
    title: 'Goa Villa',
    category: 'Residential Design',
    span: 8,
    shadow: false,
    delay: false,
    image: '/images/work/goa.jpg',
    video: '',
    description:
      'A Goa villa that embraces tropical living with open-plan layouts, abundant natural light and a palette inspired by the coast. Indoor-outdoor spaces blur the boundary between the lush surroundings and refined interiors.',
  },
  {
    title: 'Living Area',
    category: 'Interior Design',
    span: 4,
    shadow: true,
    delay: true,
    image: '/images/work/living-area.jpg',
    video: '',
    description:
      'A sophisticated living area designed for both relaxation and entertaining. Rich materials, statement lighting and a curated furniture selection come together to create a space that feels both polished and welcoming.',
  },
  {
    title: 'Noida Residence',
    category: 'Interior Design',
    span: 6,
    shadow: true,
    delay: false,
    image: '/images/work/noida.jpg',
    video: '',
    description:
      'A Noida residence that combines contemporary elegance with everyday functionality. Thoughtful space planning, a restrained material palette and custom built-ins give each room a sense of calm sophistication.',
  },
].map((project) => ({
  ...project,
  slug: slugify(`${project.title}-${project.category}`),
}))
