import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ק',
  'ר',
  'א',
  'ט',
  'ו',
  'ן',
  'ם',
  'פ',
  'ש',
  'ד',
  'ג',
  'כ',
  'ע',
  'י',
  'ח',
  'ל',
  'ך',
  'ף',
  'ז',
  'ס',
  'ב',
  'ה',
  'נ',
  'מ',
  'צ',
  'ת',
  'ץ',
  'אַ',
  'אָ',
  'װ',
  'ױ',
  'ײ',
  'פּ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
