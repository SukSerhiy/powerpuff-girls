import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  main: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      height: '90%',
      '& > *': {
        height: '100%',
      }
    },
  },
  mainLeftBlock: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 5%',
  },
  coverImg: {
    maxWidth: '100%',
  },
  title: {
    '& > h2': {
      fontSize: 32,
      fontStyle: 'italic',
      textAlign: 'center',
      margin: '10% 0px',
    },
  },
  summary: {
    fontSize: 27,
    color: 'grey',
    [theme.breakpoints.down('md')]: {
      textAlign: 'justify',
    },
  },
  episodesTitle: {
    fontSize: 32,
    letterSpacing: 1,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  episodeLink: {
    display: 'block',
    textDecoration: 'none',
    fontSize: 20,
    margin: '4px 0px',
  }
}))

const Home = (props) => {
  const { 
    data: {
      name,
      summary,
      image: {
        original: image
      },
      _embedded: {
        episodes
      }, 
    },
    fetchShow
  } = props
  const classes = useStyles()
  useEffect(() => {
    fetchShow()
  }, [fetchShow])
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.mainLeftBlock}>
          <div className={classes.title}>
            <h2>
              {name}
            </h2>
          </div>
          <div
            className={classes.summary} 
            dangerouslySetInnerHTML={{ __html: summary }}>
          </div>
        </div>
        <img className={classes.coverImg} src={image} alt='cover' />
      </div>
      <h2 className={classes.episodesTitle}>Episodes</h2>
      <div className={classes.episodes}>
        {episodes.map(ep => (
          <Link 
            className={classes.episodeLink}
            key={ep.id} to={`/episodes/${ep.id}`}
          >
            {ep.name}
          </Link>  
        ))}
      </div>
    </div>
  )
}

export default Home
