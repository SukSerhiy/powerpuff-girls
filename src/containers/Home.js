
import { connect } from 'react-redux'
import { fetchShow } from '../actions/show'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  const {
    show: {
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
  fetchShow: () => dispatch(fetchShow()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)