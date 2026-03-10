// ══════════════════════════════════════════════════════════════
// CONFIGURATION — Edit this file to customise the site
// ══════════════════════════════════════════════════════════════

// ──────────────────────────────────────────
// COMPANY CONFIG
// ──────────────────────────────────────────
const COMPANY = {
  name:        "Промтехнология",
  tagline:     "Научно-произовдственное предприятие",
  description: "Мы разрабатываем проекты, которые объединяют архитектуру — и инженерную точность.",
  telegram:    "https://t.me/sengpro",
  whatsapp:    "https://wa.me/79228957711",
  email:       "npp-promtech@mail.ru",
  phone:       "+7 (922) 895-7711",
  stats: [
    { num: "50+", label: "Проектов" },
    { num: "12",   label: "Лет" },
    { num: "12",   label: "Наград" },
  ]
};

// ──────────────────────────────────────────
// PROJECTS CONFIG
// To add a project: copy one block, fill in
// fields, add as many sections as you need.
//
// MEDIA TYPES:
//   mainMedia: { type: 'image', src: 'url' }
//   mainMedia: { type: 'video', src: 'url', poster: 'url' }
//
// CONTENT BLOCK TYPES (inside sections[].content[]):
//   { type: 'text',       value: 'paragraph...' }
//   { type: 'subheading', value: 'Sub-title' }
//   { type: 'image',      src: 'url', caption: '...', ratio: 'landscape'|'portrait'|'square' }
//   { type: 'image-grid', images: [{src,caption},{...}], caption: 'Group caption' }
//   { type: 'quote',      value: 'pull quote text' }
//   { type: 'specs',      items: [{label:'Area',value:'4 200 m²'},{...}] }
// ──────────────────────────────────────────
const PROJECTS = [
  {
    id:         "harbor-residence",
    name:       "Жилой дом на ул. Юркина, г. Оренбург",
    category:   "Residential",
    year:       "2024",
    shortDesc:  "A coastal private home where raw concrete meets panoramic sea views and seamless indoor-outdoor living.",
    mainMedia:  { type: 'image', src: 'assets/urk.png' },
    thumbnail:  'assets/urk.png',
    sections: [
      {
        id:    "overview",
        title: "Project Overview",
        content: [
          { type: 'text', value: 'Harbor Residence is a 480 m² private home perched on a coastal bluff, designed to frame uninterrupted views of the Pacific while remaining deeply anchored to the landscape.' },
          { type: 'specs', items: [
            { label: 'Area',     value: '480 m²' },
            { label: 'Location', value: 'Malibu, CA' },
            { label: 'Status',   value: 'Completed' },
            { label: 'Year',     value: '2024' },
          ]},
          { type: 'text', value: 'The brief called for a home that dissolves the boundary between interior and exterior — a concept we pursued through full-height glazed façades, cantilevered terraces, and a palette of materials that age alongside the coastline.' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', caption: 'South-facing façade at dusk' },
        ]
      },
      {
        id:    "concept",
        title: "Design Concept",
        content: [
          { type: 'text', value: 'The plan is organised along a single east-west spine — a 28-metre gallery corridor that connects every room to the sea. From this axis, living spaces step outward, each slightly rotated to avoid direct solar gain while preserving views.' },
          { type: 'quote', value: 'The house is an instrument for measuring light — every room is calibrated to a specific time of day.' },
          { type: 'text', value: 'Board-formed concrete, white oak, and oxidised steel define the material language. These were chosen not for fashionable reasons but because they respond to salt air, UV, and time in ways that become more beautiful with age.' },
          { type: 'image-grid', images: [
            { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80', caption: 'Living room, morning' },
            { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', caption: 'Kitchen detail' },
          ], caption: 'Interior material palette' },
        ]
      },
      {
        id:    "construction",
        title: "Construction",
        content: [
          { type: 'subheading', value: 'Structural Approach' },
          { type: 'text', value: 'The 14-metre cantilever over the cliff edge required a post-tensioned concrete frame with a transfer beam concealed within the roofline. All structural elements were coordinated with the glazing system to eliminate visible columns along the sea façade.' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80', caption: 'Construction, structural frame phase' },
          { type: 'subheading', value: 'Sustainability' },
          { type: 'text', value: 'Passive solar design reduces heating demand by 60%. A 32 kWp rooftop PV array, rainwater harvesting, and a ground-source heat pump bring the home to near net-zero operation without compromising the architectural language.' },
        ]
      },
      {
        id:    "outcome",
        title: "Outcome",
        content: [
          { type: 'text', value: 'The residence was completed in Q3 2024, two weeks ahead of schedule. It was shortlisted for the AIA California Award and featured in Architectural Digest\'s annual issue on residential architecture.' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80', caption: 'Completed exterior — golden hour' },
        ]
      }
    ]
  },
  {
    id:         "central-tower",
    name:       "Central Tower",
    category:   "Commercial",
    year:       "2023",
    shortDesc:  "A 22-storey mixed-use tower redefining the city skyline with a faceted glass façade and sky gardens on every fourth floor.",
    mainMedia:  { type: 'image', src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80' },
    thumbnail:  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    sections: [
      {
        id:    "overview",
        title: "Project Overview",
        content: [
          { type: 'text', value: 'Central Tower is a 22-storey mixed-use high-rise comprising 15,000 m² of grade-A office space, 3 floors of retail, and sky gardens at every fourth floor that collectively add 2,200 m² of public green space to the city centre.' },
          { type: 'specs', items: [
            { label: 'GFA',      value: '24 000 m²' },
            { label: 'Height',   value: '96 m' },
            { label: 'Location', value: 'Chicago, IL' },
            { label: 'Year',     value: '2023' },
          ]},
        ]
      },
      {
        id:    "facade",
        title: "Façade & Structure",
        content: [
          { type: 'text', value: 'The faceted curtain wall is composed of 4,800 individually angled glass panels, each sized to minimise solar gain on its orientation. The resulting crystalline appearance changes character throughout the day as light angles shift.' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80', caption: 'Façade detail — glazing system' },
          { type: 'quote', value: 'We wanted a tower that belongs to its skyline the way a crystal belongs to a mineral formation — inevitable, precise, unique.' },
        ]
      },
      {
        id:    "sky-gardens",
        title: "Sky Gardens",
        content: [
          { type: 'text', value: 'Six sky gardens punctuate the tower at floors 4, 8, 12, 16, 20, and 22. Each is planted with a distinct biome — from a Mediterranean landscape at the base to a high-altitude meadow at the crown — responding to the changing wind and light conditions at altitude.' },
          { type: 'image-grid', images: [
            { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', caption: 'Sky garden, floor 12' },
            { src: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&q=80', caption: 'Crown garden, floor 22' },
          ], caption: 'Sky garden biomes' },
        ]
      }
    ]
  },
  {
    id:         "woodland-chapel",
    name:       "Woodland Chapel",
    category:   "Cultural",
    year:       "2022",
    shortDesc:  "A small woodland meditation chapel built from locally felled timber, designed to frame a single beam of morning light at the equinox.",
    mainMedia:  { type: 'image', src: 'https://images.unsplash.com/photo-1548628189-9a75e7a11e24?w=1400&q=80' },
    thumbnail:  'https://images.unsplash.com/photo-1548628189-9a75e7a11e24?w=800&q=80',
    sections: [
      {
        id:    "overview",
        title: "Project Overview",
        content: [
          { type: 'text', value: 'The Woodland Chapel is a 48 m² structure of locally harvested Douglas fir, set in a clearning in a 200-hectare private estate. The single aperture in the east wall is precisely oriented to admit a narrow shaft of sunlight directly across the altar stone at sunrise on the autumn equinox.' },
          { type: 'specs', items: [
            { label: 'Area',     value: '48 m²' },
            { label: 'Location', value: 'Vermont' },
            { label: 'Material', value: 'Douglas Fir' },
            { label: 'Year',     value: '2022' },
          ]},
        ]
      },
      {
        id:    "craft",
        title: "Craft & Material",
        content: [
          { type: 'text', value: 'Every timber was felled on-site, dried for 18 months, then hand-planed by two craftsmen who spent four months on the building. No power tools were used on the visible surfaces.' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80', caption: 'Interior — handplaned Douglas fir walls' },
          { type: 'quote', value: 'There is more architecture in the slowness of making than in the making itself.' },
        ]
      }
    ]
  }
];
