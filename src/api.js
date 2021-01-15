import axios from 'axios'

class Api {
  constructor({
    host,
  }) {
    this.axios = axios.create({
      baseURL: host,
    })
  }

  async fetchSingleShow(name, embed) {
    return this.axios
      .get(`/singlesearch/shows?q=${encodeURI(name)}${embed ? `&embed=${embed}` : ''}`)
  }

  async fetchEpisode(id) {
    return this.axios
      .get(`/episodes/${id}`)
  }
}

export default Api
