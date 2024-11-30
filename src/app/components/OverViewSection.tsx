import React from 'react'
import { OverviewHeading } from './helpers/OverviewHeading'
import OverviewCards from './helpers/OverviewCards'

export default function OverViewSection() {
  return (
    <div className=''>
        {/* Heading Section */}
        <div className=''>
            <OverviewHeading firstLineText='Overview' secondLinetext='Full Stack Developer passionate about modern UI/UX design and solving complex problems.'  />
        </div>
        {/* Cards Section */}
        <div>
            <OverviewCards />
        </div>

    </div>
  )
}
