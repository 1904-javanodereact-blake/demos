export const chuckNorrisTypes = {
  JOKE_UPDATE: 'JOKE_UPDATE',
  PROCESSING_NEW_JOKE: 'PROCESSING_NEW_JOKE'
}

export const buyJoke = () => async (dispatch) => {
  dispatch({
    type: chuckNorrisTypes.PROCESSING_NEW_JOKE
  })
  const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
  const body = await resp.json();
  dispatch({
    payload: {
      joke: body.value.joke
    },
    type: chuckNorrisTypes.JOKE_UPDATE
  })
}

