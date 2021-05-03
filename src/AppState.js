import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

  request: {
    jsonrpc: '2.0',
    method: 'generateIntegers',
    params: {
      n: 1,
      min: '',
      max: '',
      apiKey: 'b0c2d576-9dde-41d9-8e41-b6db9b4f05ef'
    },
    id: 1
  }

})
