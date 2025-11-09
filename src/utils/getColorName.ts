export const getColorName = (color: string) => {
  if (!color) {
    return
  }

  switch(color) {
    case "#adb5bd":
      return "Prata"
    case "#ffe4b5":
      return "Dourado"
    case "#191c24":
      return "Midnight"
    case "#2e2c2e":
      return "Preto Espacial"
    default:
      return "Preto Espacial"
  }
}