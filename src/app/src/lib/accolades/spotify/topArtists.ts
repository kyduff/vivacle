import { ApiResponse } from "../apiResponse";

export class TopArtistResponse extends ApiResponse {
  private topArtists;

  constructor(provider, userId, data) {
    super(provider, userId, data);
    this.topArtists = data.items;
  }

  public topArtistListIncludes(artistId: String) {
    const isArtist = (artistObject) => artistObject.uri === artistId
    return this.topArtists.some(isArtist)
  }

  public artistsPopularityAtLeast(threshold: Number) {
    return this.topArtists.filter(a => a.popularity >= threshold);
  }

  public artistsPopularityAtMost(threshold: Number) {
    return this.topArtists.filter(a => a.popularity <= threshold);
  }
}

// Easier to have an abstracted "applyFilter" method that applied the filter to the artists array?
