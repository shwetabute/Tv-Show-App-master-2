export interface ItvShowData {
  name: string,
  language: string,
  genres: string,
  rating: {
  average: number
  },
  network: {
    country: {
      name: string
    }
  },
  image: {
    medium: string
  },
  summary: string
}

