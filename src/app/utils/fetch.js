import apisauce from 'apisauce'
import axiosRetry from 'axios-retry'

const isBrowser = typeof window !== 'undefined'

export default (config) => {
  const instance = apisauce.create(config)
  axiosRetry(instance.axiosInstance, {
    retries: 2
  })
  instance.addResponseTransform((response) => {
    try {
      if (!isBrowser) {
        let responseData = response.data
        let trace = null // eslint-disable-line no-unused-vars
        if (responseData && typeof responseData === 'object' && 'trace' in responseData) {
          ({ trace, ...responseData } = response.data)
        }
        if (!response.ok) {
          console.log(responseData) // eslint-disable-line no-console
          console.log('----') // eslint-disable-line no-console
        }
      }
    } catch (e) {} // eslint-disable-line no-empty
  })

  // send back the sauce
  return instance
}
