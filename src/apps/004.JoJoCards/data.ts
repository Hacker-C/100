import Image1 from './assets/1.webp'
import Image2 from './assets/2.webp'
import Image3 from './assets/3.webp'
import Image4 from './assets/4.webp'
import Image5 from './assets/5.webp'
import Image6 from './assets/6.webp'
import Image7 from './assets/7.webp'
import Image8 from './assets/8.webp'
import Image9 from './assets/9.webp'
import Image10 from './assets/10.webp'
import Image11 from './assets/11.webp'
import Image12 from './assets/12.webp'
import Image13 from './assets/13.webp'
import Image14 from './assets/14.webp'
import Image15 from './assets/15.webp'
import Image16 from './assets/16.webp'
import Image17 from './assets/17.webp'
import Image18 from './assets/18.webp'

export interface Hero {
  id: number
  src: string
  isFront: boolean
}

const initHeros: Hero[] = [
  { id: 1, src: Image1, isFront: false },
  { id: 2, src: Image2, isFront: false },
  { id: 3, src: Image3, isFront: false },
  { id: 4, src: Image4, isFront: false },
  { id: 5, src: Image5, isFront: false },
  { id: 6, src: Image6, isFront: false },
  { id: 7, src: Image7, isFront: false },
  { id: 8, src: Image8, isFront: false },
  { id: 9, src: Image9, isFront: false },
  { id: 10, src: Image10, isFront: false },
  { id: 11, src: Image11, isFront: false },
  { id: 12, src: Image12, isFront: false },
  { id: 13, src: Image13, isFront: false },
  { id: 14, src: Image14, isFront: false },
  { id: 15, src: Image15, isFront: false },
  { id: 16, src: Image16, isFront: false },
  { id: 17, src: Image17, isFront: false },
  { id: 18, src: Image18, isFront: false }
]

export default initHeros
