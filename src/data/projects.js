// Portfolio projects — mirrors the original MICASA homepage grid.
//
// NOTE:
// - `image` is a local poster in /public/images/work — replace with your own work.
// - `video` currently points at the original site's hosted clips so the hover
//   video effect works out of the box. Swap these for your own files
//   (e.g. "/videos/my-project.mp4") before going live.
// - `span` is the desktop column span (4 = 1/3, 6 = 1/2, 8 = 2/3).
// - `shadow` adds the Bootstrap-style drop shadow used on some cards.

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const projects = [
  { title: 'APEX Tower', category: 'Exterior', span: 6, shadow: true, delay: false, image: '/images/work/apex-ext.webp', video: 'https://www.micasa-design.com/work/2023/06_apex-ext/apex-ext.mp4' },
  { title: 'APEX Tower', category: 'Interior', span: 6, shadow: true, delay: true, image: '/images/work/apex-int.webp', video: 'https://www.micasa-design.com/work/2023/07_apex-int/apex-int.mp4' },

  { title: 'APEX Restaurant', category: 'Modern Design', span: 8, shadow: false, delay: false, image: '/images/work/apex-restaurant.webp', video: 'https://www.micasa-design.com/work/2023/04_apex-res/apex-res_1.mp4' },
  { title: 'Durmen Villa', category: 'Neo Classic Design', span: 4, shadow: false, delay: true, image: '/images/work/durmen-villa.webp', video: 'https://www.micasa-design.com/work/2023/05_durmen-villa/durmen.mp4' },

  { title: 'Nest ONE Apartment', category: 'Modern Design', span: 4, shadow: true, delay: false, image: '/images/work/nest-one.webp', video: 'https://www.micasa-design.com/work/2023/01_nest-one/nest-one.mp4' },
  { title: 'Oxygen Apartment', category: 'Neo Classic', span: 8, shadow: false, delay: true, image: '/images/work/oxygen-apartment.webp', video: 'https://www.micasa-design.com/work/2023/03_oc/oc_1.mp4' },

  { title: 'Plove', category: 'Lounge Bar', span: 6, shadow: true, delay: false, image: '/images/work/plove.webp', video: 'https://www.micasa-design.com/work/2023/plov/video-loop.mp4' },
  { title: 'Private Villa', category: 'Modern Design', span: 6, shadow: true, delay: true, image: '/images/work/private-villa.webp', video: 'https://www.micasa-design.com/work/2023/M-Villa_01/m_video.mp4' },

  { title: 'Boulvard Apartments', category: 'Interior Design', span: 8, shadow: false, delay: false, image: '/images/work/boulevard-apartments.webp', video: 'https://www.micasa-design.com/work/boulevard_1/video_loop.mp4' },
  { title: 'Gabus Apartments', category: 'Modern Design', span: 4, shadow: false, delay: true, image: '/images/work/gabus-modern.webp', video: 'https://www.micasa-design.com/work/gabus_1/video_loop.mp4' },

  { title: 'Private Villa Exterior', category: 'Classic Design', span: 4, shadow: true, delay: false, image: '/images/work/private-villa-exterior.jpg', video: 'https://www.micasa-design.com/work/exterior_1/video_loop.mp4' },
  { title: 'Gardens Residence', category: 'Neo Classic Design', span: 8, shadow: false, delay: true, image: '/images/work/gardens-residence.jpg', video: 'https://www.micasa-design.com/work/tashkent-city/video_loop.mp4' },

  { title: 'Cambridge Residence', category: 'Neo Classical Design', span: 6, shadow: true, delay: false, image: '/images/work/cambridge.webp', video: 'https://www.micasa-design.com/work/cambridge/videoplayback.mp4' },
  { title: 'Sayram Village', category: 'Neo Classical Design', span: 6, shadow: true, delay: true, image: '/images/work/sayram.webp', video: 'https://www.micasa-design.com/work/sayram/sayram_loop.mp4' },

  { title: 'Private House Interior', category: 'Neo Classic Design', span: 4, shadow: true, delay: false, image: '/images/work/private-house.webp', video: 'https://www.micasa-design.com/work/project_3/video_main.mp4' },
  { title: 'Office Interior', category: 'Modern Design', span: 8, shadow: false, delay: true, image: '/images/work/office-interior.webp', video: 'https://www.micasa-design.com/work/project_1/video_loop.mp4' },

  { title: 'Parisien Apartments', category: 'Neo Classical Design', span: 6, shadow: false, delay: false, image: '/images/work/parisien.webp', video: 'https://www.micasa-design.com/work/parisian_1/parisian_loop.mp4' },
  { title: 'Gabus Apartments', category: 'Neo Classical Design', span: 6, shadow: false, delay: true, image: '/images/work/gabus-classic.webp', video: 'https://www.micasa-design.com/work/parisian_2/main_loop.mp4' },

  { title: 'Fazo Residence', category: 'Exterior Design', span: 8, shadow: false, delay: false, image: '/images/work/fazo-exterior.webp', video: 'https://www.micasa-design.com/work/fazo_residence/video_loop.mp4' },
  { title: 'Fazo Residence', category: 'Interior Design', span: 4, shadow: false, delay: true, image: '/images/work/fazo-interior.webp', video: 'https://www.micasa-design.com/work/fazo_residence_interior/video_loop.mp4' },

  { title: 'Gardens Residence', category: 'Neo Classical Design', span: 6, shadow: false, delay: false, image: '/images/work/gardens-classic.webp', video: 'https://www.micasa-design.com/work/garden/video_loop.mp4' },
  { title: 'Gardens Residence', category: 'Terassa Design', span: 6, shadow: false, delay: true, image: '/images/work/gardens-terassa.webp', video: 'https://www.micasa-design.com/work/garden_ter/video_loop.mp4' },

  { title: 'Coffee Wine', category: 'Classical Design', span: 4, shadow: false, delay: false, image: '/images/work/coffee-wine.webp', video: 'https://www.micasa-design.com/work/coffeewine/coffee_wine.mp4' },
  { title: 'Humo Arena', category: 'Interior Design', span: 8, shadow: false, delay: true, image: '/images/work/humo-arena.webp', video: 'https://www.micasa-design.com/work/humo/video_loop.mp4' },
].map((project) => ({
  ...project,
  slug: slugify(`${project.title}-${project.category}`),
}))
