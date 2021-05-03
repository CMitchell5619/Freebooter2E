import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { randomApi } from './AxiosService'

class CharactersService {
  async rollDice(min, max) {
    try {
      AppState.request.params.min = min
      AppState.request.params.max = max
      const request = AppState.request
      const res = await randomApi.post('/invoke', request)
      console.log(res.data.result.random.data)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const charactersService = new CharactersService()
