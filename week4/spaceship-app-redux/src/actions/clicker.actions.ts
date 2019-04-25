export const clickerTypes = {
  CLICKER_UPDATE: 'CLICKER_UPDATE'
}

export const updateClicks = (amount: number) => {
  return {
    payload: {
      amount
    },
    type: clickerTypes.CLICKER_UPDATE
  }
}