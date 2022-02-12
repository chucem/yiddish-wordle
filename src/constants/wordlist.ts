import { CONFIG } from './config'

export const WORDS = [
  "גראָשן",
  "קאַמין",
  "װאַשער",
  "פעטער",
  "שינעל",
  "זיסער",
  "שריפט",
  "דאָליע",
  "בלענד",
  "קריגן",
  "רעזשי",
  "אָרטיק",
  "מעניו",
  "קונצן",
  "מאָנאַך",
  "נאָטיץ",
  "שטיקה",
  "געמיש",
  "בײזײן",
  "בעטער",
  "שמועה",
  "שליסל",
  "עפעקט",
  "קוליע",
  "בעלמע",
  "האַלדז",
  "בינדע",
  "שאַלפײ",
  "שטורך",
  "מעסטל",
  "טרײסל",
  "סגולה",
  "גאָרטן",
  "סמאָלע",
  "גנבות",
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
