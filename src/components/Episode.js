import React, { useEffect } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  titleBlock: {
    display: 'flex',
  },
  goBackButton: {
    borderRadius: '100%',
    paddingLeft: 14,
    marginRight: 15,
  },
  summary: {
    fontSize: 27,
    color: 'grey',
  },
  coverImg: {
    width: '100%',
  },
})

const Episode = (props) => {
  const { id } = useParams()
  const classes = useStyles()
  const history = useHistory()
  const { fetchEpisode, data: {
    name, summary, image: { original: image } 
  } } = props
  useEffect(() => {
    fetchEpisode(id)
  }, [fetchEpisode, id])
  return (
    <div className={classes.root}>
      <div className={classes.titleBlock}>
        <Button
          className={classes.goBackButton}
          onClick={history.goBack}
        >
          <ArrowBackIosIcon />
        </Button>
        <h2>{name}</h2>
      </div>
      <div
        className={classes.summary}
        dangerouslySetInnerHTML={{ __html: summary }}>
      </div>
      <img className={classes.coverImg} src={image} alt='episode' />
    </div>
  )
}

export default Episode
