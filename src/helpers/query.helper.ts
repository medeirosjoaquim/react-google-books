export const baseUrl = 
  'https://www.googleapis.com/books/v1/volumes?maxResults=5&langRestrict=en'

export const buildQuery = 
(query: string, startIndex: number, base = baseUrl ): string => {
  return `${base}&q=${query}&startIndex=${startIndex}`
}