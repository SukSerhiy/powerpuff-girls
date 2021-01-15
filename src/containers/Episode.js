
import { connect } from 'react-redux'
import { fetchEpisode } from '../actions/episode'
import Episode from '../components/Episode'

const mapStateToProps = (state) => {
  const {
    episode: {
      isFetching,
      data
    },
  } = state
  return {
    isFetching,
    data,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEpisode: (id) => dispatch(fetchEpisode(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Episode)
