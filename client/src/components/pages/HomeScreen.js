import React, { Suspense, lazy } from 'react'

import HeroScreen from "../helperComponents/HeroScreen";
const RecentPropertiesCard = lazy(() => import("../helperComponents/RecentPropertiesCard"))
const Services = lazy(() => import("../helperComponents/Services"))
const PopularPlaces = lazy(() => import("../helperComponents/PopularPlaces"))
const Sponsors = lazy(() => import("../helperComponents/Sponsors"))
const PropertiesCard = lazy(() => import("../helperComponents/PropertiesCard"))
const Footer = lazy(() => import("../helperComponents/Footer"))


const HomeScreen = () => {

  return (
    <>
      <div id="home-container">
        <HeroScreen />

        <Suspense fallback={<div />}>
          <RecentPropertiesCard />
        </Suspense>
        <Suspense fallback={<div />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div />}>
          <PropertiesCard />
        </Suspense>
        <Suspense fallback={<div />}>
          <PopularPlaces />
        </Suspense>
        <Suspense fallback={<div />}>
          <Sponsors />
        </Suspense>
      </div>

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  )
}


export default HomeScreen;

