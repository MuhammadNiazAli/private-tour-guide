import React from 'react'
import Oceanmainhero from './components/OceanMainHero'
import GreatOceanGallery from './components/GreatOceanGallery'
import GreatOceanHighlights from './components/GreatOceanHighlights'
import GreatOceanItinerary from './components/GreatOceanItinerary'
import GreatOceanRelatedTours from './components/GreatOceanRelatedTours'
import GreatOceanReviews from './components/GreatOceanReviews'
import GreatOceanTravelTips from './components/GreatOceanTravelTips'
import GreatOceanTourInfo from './components/GreatOceanTourInfo'
import GreatOceanPricing from './components/GreatOceanPricing'

const Oceanmainpage = () => {
  return (
    <div>
      <Oceanmainhero/>
      <GreatOceanGallery/>
      <GreatOceanHighlights/>
      <GreatOceanItinerary/>
      <GreatOceanRelatedTours/>
      <GreatOceanTravelTips/>
      <GreatOceanTourInfo/>
      <GreatOceanReviews/>
      <GreatOceanPricing/>
    </div>
  )
}

export default Oceanmainpage
