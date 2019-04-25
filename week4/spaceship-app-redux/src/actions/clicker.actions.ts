export const clickerTypes = {
  CLICKER_UPDATE: 'CLICKER_UPDATE'
}

export const updateClicks = (amount: number) => (dispatch) => {
  dispatch({
    payload: {
      amount
    },
    type: clickerTypes.CLICKER_UPDATE
  })
}