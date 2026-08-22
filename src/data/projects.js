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
    location: 'Bangalore, India',
    span: 8,
    shadow: true,
    delay: false,
    image: '/images/work/bangalore.jpg',
    video: '',
    description:
      'A contemporary Bangalore residence where clean lines meet warm textures. The design balances modern minimalism with inviting living spaces, featuring bespoke joinery, natural stone finishes and a seamless flow between rooms.',
    images: [
      '/images/work/for website/bangalore projects/001.jpg',
      '/images/work/for website/bangalore projects/002.jpg',
      '/images/work/for website/bangalore projects/chrockery hd 2.png',
      '/images/work/for website/bangalore projects/chrockery hd 3.png',
      '/images/work/for website/bangalore projects/foyer 2.png',
      '/images/work/for website/bangalore projects/kid bedroom 01.jpg',
      '/images/work/for website/bangalore projects/kid bedroom 02.jpg',
      '/images/work/for website/bangalore projects/kid bedroom 03.jpg',
      '/images/work/for website/bangalore projects/master bedroom 01.jpg',
      '/images/work/for website/bangalore projects/master bedroom 02.jpg',
      '/images/work/for website/bangalore projects/tv unit hd 2.png',
    ],
  },
  {
    title: 'Master Bedroom Suite',
    category: 'Bedroom Design',
    location: 'Mumbai, India',
    span: 4,
    shadow: false,
    delay: true,
    image: '/images/work/bedroom.jpg',
    video: '',
    description:
      'A serene master bedroom suite designed for restful elegance. Soft neutral tones, layered textiles and carefully considered lighting create a cocoon of comfort, while custom wardrobes and a refined headboard anchor the space.',
    images: [
      '/images/work/for website/BEDROOM/bedroom01.jpg',
      '/images/work/for website/BEDROOM/bedroom02.jpg',
      '/images/work/for website/BEDROOM/BEDROOM03.jpg',
      '/images/work/for website/BEDROOM/BEDROOM04.jpg',
      '/images/work/for website/BEDROOM/RENDER04.jpg',
      '/images/work/for website/BEDROOM/RENDER05.jpg',
    ],
  },
  {
    title: 'Goa Villa',
    category: 'Residential Design',
    location: 'Goa, India',
    span: 8,
    shadow: false,
    delay: false,
    image: '/images/work/goa.jpg',
    video: '',
    description:
      'A Goa villa that embraces tropical living with open-plan layouts, abundant natural light and a palette inspired by the coast. Indoor-outdoor spaces blur the boundary between the lush surroundings and refined interiors.',
    images: [
      '/images/work/for website/goa/LIVING 01.jpg',
      '/images/work/for website/goa/LIVING 02.jpg',
      '/images/work/for website/goa/LIVING 03.jpg',
      '/images/work/for website/goa/bedroom0101.jpg',
      '/images/work/for website/goa/bedroom0102.jpg',
      '/images/work/for website/goa/BATHROOM01.png',
      '/images/work/for website/goa/BATHROOM02.png',
      '/images/work/for website/goa/BATHROOM03.png',
    ],
  },
  {
    title: 'Living Area',
    category: 'Interior Design',
    location: 'Delhi, India',
    span: 4,
    shadow: true,
    delay: true,
    image: '/images/work/living-area.jpg',
    video: '',
    description:
      'A sophisticated living area designed for both relaxation and entertaining. Rich materials, statement lighting and a curated furniture selection come together to create a space that feels both polished and welcoming.',
    images: [
      '/images/work/for website/LIVING AREA/LIVING AREA01.jpg',
      '/images/work/for website/LIVING AREA/LIVING AREA02.jpg',
      '/images/work/for website/LIVING AREA/BAR.jpeg',
      '/images/work/for website/LIVING AREA/STAIR AREA.jpeg',
    ],
  },
  {
    title: 'Noida Residence',
    category: 'Interior Design',
    location: 'Noida, India',
    span: 6,
    shadow: true,
    delay: false,
    image: '/images/work/noida.jpg',
    video: '',
    description:
      'A Noida residence that combines contemporary elegance with everyday functionality. Thoughtful space planning, a restrained material palette and custom built-ins give each room a sense of calm sophistication.',
    images: [
      '/images/work/for website/noida/M.BEDROOM01.jpg',
      '/images/work/for website/noida/M.BEDROOM02.jpg',
      '/images/work/for website/noida/M.BEDROOM001.jpg',
      '/images/work/for website/noida/M.BEDROOM002.jpg',
      '/images/work/for website/noida/m. bathrrom01.jpg',
      '/images/work/for website/noida/m. bathrrom02.jpg',
      '/images/work/for website/noida/noida2/master bedroom03.jpg',
      '/images/work/for website/noida/noida2/master bedroom04.jpg',
      '/images/work/for website/noida/noida2/master bedroom05.jpg',
      '/images/work/for website/noida/noida2/study area.jpg',
    ],
  },
].map((project) => ({
  ...project,
  slug: slugify(`${project.title}-${project.category}`),
}))
