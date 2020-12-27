import React from 'react'
import Latest from './TvShowsData/Latest'
import OnAirTvShows from './TvShowsData/OnAirTvShows'
import PopularTvshows from './TvShowsData/PopularTvshows'

function Alltvshows() {
    

    return (
      <div className="bg-gray-900 text-gray-100">
          <OnAirTvShows />
          <PopularTvshows />
          <Latest />
        </div>
    )
}

export default Alltvshows