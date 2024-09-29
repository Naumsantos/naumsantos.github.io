function solucao(peso1, peso2) {
  // seu codigo aqui
  if (peso1 < 55 || peso2 < 55) {
    return "PODEM LUTAR"
  } else if (peso1 < 65 || peso2 < 65) {
    return "PODEM LUTAR"
  } else if (peso1 < 75 || peso2 < 75) {
    return "PODEM LUTAR"
  } else if (peso1 < 85 || peso2 < 85) {
    return "PODEM LUTAR"
  } else if (peso1 >= 85 && peso2 >= 85) {
    return "PODEM LUTAR"
  }

  return "NÃO PODEM LUTAR"
}

solucao(66, 67) 