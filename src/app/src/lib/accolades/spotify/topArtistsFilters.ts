export const topArtistListIncludes = (topArtistArray, artistId: String) => {
  const isArtist: Function = (artistObject) => artistObject.uri === artistId
  return topArtistArray.some(isArtist)
}

export const artistsPopularityAtLeast = (topArtistArray, threshold: Number) => {
  return topArtistArray.filter(a => a.popularity >= threshold);
}

export const artistsPopularityAtMost = (topArtistArray, threshold: Number) => {
  return topArtistArray.filter(a => a.popularity <= threshold);
}

