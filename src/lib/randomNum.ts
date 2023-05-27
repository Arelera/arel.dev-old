export default function randomNum(min = 0, max = 10) {
  if (min >= max) return 0
  return Math.random() * (max - min) + min
}
