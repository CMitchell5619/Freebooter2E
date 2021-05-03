import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { randomApi } from './AxiosService'

class CharactersService {
  async rollDice(n, min, max) {
    try {
      AppState.request.params.n = n
      AppState.request.params.min = min
      AppState.request.params.max = max
      const request = AppState.request
      const res = await randomApi.post('/invoke', request)
      console.log(res.data.result.random.data)
      AppState.numRolled = res.data.result.random.data
    } catch (err) {
      logger.error(err)
    }
  }

  async setOccupation(n, min, max) {
    try {
      AppState.request.params.n = n
      AppState.request.params.min = min
      AppState.request.params.max = max
      const request = AppState.request
      const res = await randomApi.post('/invoke', request)
      const numRolled = res.data.result.random.data

      switch (numRolled) {
        case 1:
          AppState.character.occupation = 'apothecary'
          break
        case 2:
          AppState.character.occupation = 'baker'
          break
        case 3:
          AppState.character.occupation = 'bard'
          break
        case 4:
          AppState.character.occupation = 'barkeep'
          break
        case 5:
          AppState.character.occupation = 'basketmaker'
          break
        case 6:
          AppState.character.occupation = 'beekeeper'
          break
        default:
          console.log('Occupation not set')
          break
      }
    } catch (err) {
      logger.error(err)
    }
  }
}

export const charactersService = new CharactersService()
