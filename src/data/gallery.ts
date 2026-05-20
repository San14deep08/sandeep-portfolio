export type GalleryCategory = 'All' | 'Touring' | 'Trekking' | 'Cricket' | 'Life'

export type GalleryItem = {
  src: string
  caption: string
  category: Exclude<GalleryCategory, 'All'>
}

// Drop photos into public/gallery/ and add entries here.
// src format: '/gallery/your-photo.jpg'
export const galleryItems: GalleryItem[] = [
  {
    src: '/gallery/1000045357.jpg',
    caption: 'Keeping it traditional 🤍',
    category: 'Life',
  },
  {
    src: '/gallery/1000045361.jpg',
    caption: 'Just vibing',
    category: 'Life',
  },
  {
    src: '/gallery/1000073620.jpg',
    caption: 'The engineer outside the IDE',
    category: 'Life',
  },
]

export const CATEGORIES: GalleryCategory[] = ['All', 'Touring', 'Trekking', 'Cricket', 'Life']
