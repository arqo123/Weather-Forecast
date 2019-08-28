 export interface WeatherForecast {
  main?: WeatherDetails
  sys?: SunInformations
  weather?: WeatherDescription[]
  name?: string
  wind?: Wind
  clodus?: Clouds
  coord?: Coordinates
  dt_txt?: string
  list? : WeatherForecast[]
  date? : Date
}

interface WeatherDetails {
  temp?: number
  humidity?: number
  pressure?: number
  temp_min?: number
  temp_max?: number
}

interface WeatherDescription {
  description?: string
  icon?: string
  main?: string
  id?: number
}

interface Wind {
  speed?: number
  deg?: number
}

interface Clouds {
  all?: number
}

interface SunInformations {
  sunrise?: number
  sunset?: number
}
