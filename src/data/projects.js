// Portfolio projects — mirrors the original MICASA homepage grid.
//
// NOTE:
// - `image` is a local poster in /public/images/work — replace with your own work.
// - `video` currently points at the original site's hosted clips so the hover
//   video effect works out of the box. Swap these for your own files
//   (e.g. "/videos/my-project.mp4") before going live.
// - `span` is the desktop column span (4 = 1/3, 6 = 1/2, 8 = 2/3).
// - `shadow` adds the Bootstrap-style drop shadow used on some cards.
// - `description` is the text shown on the project's page — replace with
//   your own project write-ups.

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const projects = [
  {
    title: 'APEX Tower', category: 'Exterior', span: 6, shadow: true, delay: false,
    image: '/images/work/apex-ext.webp',
    video: 'https://www.micasa-design.com/work/2023/06_apex-ext/apex-ext.mp4',
    description:
      'A sculptural high-rise wrapped in a continuous glass facade, APEX Tower redefines the skyline with its bold silhouette. The exterior design balances transparency and solidity, letting the tower shift in character from dawn to dusk.',
  },
  {
    title: 'APEX Tower', category: 'Interior', span: 6, shadow: true, delay: true,
    image: '/images/work/apex-int.webp',
    video: 'https://www.micasa-design.com/work/2023/07_apex-int/apex-int.mp4',
    description:
      'The interior of APEX Tower translates the building\u2019s clean geometry into warm, layered living spaces. Double-height volumes, natural stone and bespoke joinery create a calm, light-filled atmosphere.',
  },

  {
    title: 'APEX Restaurant', category: 'Modern Design', span: 8, shadow: false, delay: false,
    image: '/images/work/apex-restaurant.webp',
    video: 'https://www.micasa-design.com/work/2023/04_apex-res/apex-res_1.mp4',
    description:
      'A contemporary dining destination where a dramatic central bar anchors an open-plan layout. Warm timber, brushed metal and sculptural lighting set the stage for an intimate yet vibrant experience.',
  },
  {
    title: 'Durmen Villa', category: 'Neo Classic Design', span: 4, shadow: false, delay: true,
    image: '/images/work/durmen-villa.webp',
    video: 'https://www.micasa-design.com/work/2023/05_durmen-villa/durmen.mp4',
    description:
      'A family villa composed with classical proportions and modern comfort. Symmetrical facades, arched openings and refined moldings sit alongside open living spaces and a private garden courtyard.',
  },

  {
    title: 'Nest ONE Apartment', category: 'Modern Design', span: 4, shadow: true, delay: false,
    image: '/images/work/nest-one.webp',
    video: 'https://www.micasa-design.com/work/2023/01_nest-one/nest-one.mp4',
    description:
      'A compact apartment reimagined through smart planning and clean minimalism. Built-in furniture and a continuous material palette make every square meter feel generous and calm.',
  },
  {
    title: 'Oxygen Apartment', category: 'Neo Classic', span: 8, shadow: false, delay: true,
    image: '/images/work/oxygen-apartment.webp',
    video: 'https://www.micasa-design.com/work/2023/03_oc/oc_1.mp4',
    description:
      'An elegant apartment where neo-classical detailing meets contemporary living. Ornate cornices and paneling frame a neutral palette of stone, walnut and brushed brass.',
  },

  {
    title: 'Plove', category: 'Lounge Bar', span: 6, shadow: true, delay: false,
    image: '/images/work/plove.webp',
    video: 'https://www.micasa-design.com/work/2023/plov/video-loop.mp4',
    description:
      'An atmospheric lounge bar built around moody lighting and rich textures. Velvet, dark wood and polished stone create a series of intimate seating niches around a glowing central bar.',
  },
  {
    title: 'Private Villa', category: 'Modern Design', span: 6, shadow: true, delay: true,
    image: '/images/work/private-villa.webp',
    video: 'https://www.micasa-design.com/work/2023/M-Villa_01/m_video.mp4',
    description:
      'A modern villa designed around indoor-outdoor living, with floor-to-ceiling glazing opening onto terraces and a pool. Clean volumes and natural materials keep the focus on light and landscape.',
  },

  {
    title: 'Boulvard Apartments', category: 'Interior Design', span: 8, shadow: false, delay: false,
    image: '/images/work/boulevard-apartments.webp',
    video: 'https://www.micasa-design.com/work/boulevard_1/video_loop.mp4',
    description:
      'Refined apartment interiors on the boulevard, pairing quiet luxury with everyday practicality. Custom millwork, stone surfaces and soft textiles define each room.',
  },
  {
    title: 'Gabus Apartments', category: 'Modern Design', span: 4, shadow: false, delay: true,
    image: '/images/work/gabus-modern.webp',
    video: 'https://www.micasa-design.com/work/gabus_1/video_loop.mp4',
    description:
      'Modern apartment interiors with a flexible, open layout. A restrained palette of white oak, micro-cement and matte black accents gives the home a crisp, contemporary character.',
  },

  {
    title: 'Private Villa Exterior', category: 'Classic Design', span: 4, shadow: true, delay: false,
    image: '/images/work/private-villa-exterior.jpg',
    video: 'https://www.micasa-design.com/work/exterior_1/video_loop.mp4',
    description:
      'A classic villa exterior composed with symmetry and timeless materials. Stone cladding, pilasters and a grand entrance give the home a dignified street presence.',
  },
  {
    title: 'Gardens Residence', category: 'Neo Classic Design', span: 8, shadow: false, delay: true,
    image: '/images/work/gardens-residence.jpg',
    video: 'https://www.micasa-design.com/work/tashkent-city/video_loop.mp4',
    description:
      'A residence set within landscaped gardens, blending neo-classical elegance with generous modern proportions. Tall windows frame the greenery from every principal room.',
  },

  {
    title: 'Cambridge Residence', category: 'Neo Classical Design', span: 6, shadow: true, delay: false,
    image: '/images/work/cambridge.webp',
    video: 'https://www.micasa-design.com/work/cambridge/videoplayback.mp4',
    description:
      'A stately residence executed in the neo-classical tradition — balanced facades, classic cornices and a formal entrance hall that flows into comfortable family living spaces.',
  },
  {
    title: 'Sayram Village', category: 'Neo Classical Design', span: 6, shadow: true, delay: true,
    image: '/images/work/sayram.webp',
    video: 'https://www.micasa-design.com/work/sayram/sayram_loop.mp4',
    description:
      'A village residence where neo-classical detailing meets rural calm. Warm limestone, pitched rooflines and a shaded veranda root the house in its landscape.',
  },

  {
    title: 'Private House Interior', category: 'Neo Classic Design', span: 4, shadow: true, delay: false,
    image: '/images/work/private-house.webp',
    video: 'https://www.micasa-design.com/work/project_3/video_main.mp4',
    description:
      'A private house interior layered with neo-classic character — wall paneling, archways and herringbone floors — finished in a soft, contemporary palette.',
  },
  {
    title: 'Office Interior', category: 'Modern Design', span: 8, shadow: false, delay: true,
    image: '/images/work/office-interior.webp',
    video: 'https://www.micasa-design.com/work/project_1/video_loop.mp4',
    description:
      'A modern office designed for collaboration and focus. Glass-partitioned meeting rooms, acoustic finishes and a bright central atrium shape a flexible working environment.',
  },

  {
    title: 'Parisien Apartments', category: 'Neo Classical Design', span: 6, shadow: false, delay: false,
    image: '/images/work/parisien.webp',
    video: 'https://www.micasa-design.com/work/parisian_1/parisian_loop.mp4',
    description:
      'Apartments inspired by Parisian elegance, with classic herringbone floors, high ceilings and refined moldings updated with a contemporary furniture scheme.',
  },
  {
    title: 'Gabus Apartments', category: 'Neo Classical Design', span: 6, shadow: false, delay: true,
    image: '/images/work/gabus-classic.webp',
    video: 'https://www.micasa-design.com/work/parisian_2/main_loop.mp4',
    description:
      'A neo-classical take on city living, where ornamental details meet a modern open plan. Soft greys, brass and marble balance tradition with today\u2019s lifestyle.',
  },

  {
    title: 'Fazo Residence', category: 'Exterior Design', span: 8, shadow: false, delay: false,
    image: '/images/work/fazo-exterior.webp',
    video: 'https://www.micasa-design.com/work/fazo_residence/video_loop.mp4',
    description:
      'An exterior composition of bold geometric volumes in stone and glass. The facade plays with light and shadow, giving the residence a strong, contemporary identity.',
  },
  {
    title: 'Fazo Residence', category: 'Interior Design', span: 4, shadow: false, delay: true,
    image: '/images/work/fazo-interior.webp',
    video: 'https://www.micasa-design.com/work/fazo_residence_interior/video_loop.mp4',
    description:
      'Interiors that echo the residence\u2019s sculptural exterior — clean lines, natural stone and warm wood — designed for comfortable, generous family living.',
  },

  {
    title: 'Gardens Residence', category: 'Neo Classical Design', span: 6, shadow: false, delay: false,
    image: '/images/work/gardens-classic.webp',
    video: 'https://www.micasa-design.com/work/garden/video_loop.mp4',
    description:
      'A second chapter for the gardens residence, exploring neo-classical interiors with a lighter touch: pale stone, silk textures and gilded accents.',
  },
  {
    title: 'Gardens Residence', category: 'Terassa Design', span: 6, shadow: false, delay: true,
    image: '/images/work/gardens-terassa.webp',
    video: 'https://www.micasa-design.com/work/garden_ter/video_loop.mp4',
    description:
      'Terrace and outdoor living spaces designed as true rooms — shaded lounges, an outdoor dining area and planting that softens the boundary between house and garden.',
  },

  {
    title: 'Coffee Wine', category: 'Classical Design', span: 4, shadow: false, delay: false,
    image: '/images/work/coffee-wine.webp',
    video: 'https://www.micasa-design.com/work/coffeewine/coffee_wine.mp4',
    description:
      'A classical caf\u00e9-bar concept blending coffee culture with an evening wine program. Rich wood paneling, brass pendants and a long marble counter define the space.',
  },
  {
    title: 'Humo Arena', category: 'Interior Design', span: 8, shadow: false, delay: true,
    image: '/images/work/humo-arena.webp',
    video: 'https://www.micasa-design.com/work/humo/video_loop.mp4',
    description:
      'Large-scale arena interiors built for spectacle and flexibility. Acoustic treatment, dramatic lighting and robust materials support both concerts and sporting events.',
  },
].map((project) => ({
  ...project,
  slug: slugify(`${project.title}-${project.category}`),
}))
