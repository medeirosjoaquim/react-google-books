export const baseUrl = 'https://www.googleapis.com/books/v1/volumes?maxResults=10'

export const buildQuery = 
(query: string, startIndex: number, base = baseUrl ): string => {
  return `${base}&q=${query}&startIndex=${startIndex}`
}