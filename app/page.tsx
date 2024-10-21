'use client'

import '@root/global.scss';
import '@root/animations.scss'


import Image from "next/image";
import Navigation from "@system/Navigation";
import MetaTags from "@components/MetaTags";
import GridLayout from "@system/layouts/GridLayout";
import Table from "@system/Table";
import Tag from "@system/Tag";
import { H3 } from '@system/typography';
import Hero from '@components/Hero'
import LandingPageContent from '@components/LandingPageContent'
import Snowfall from "react-snowfall"

export default function Home() {

  const TABLE_HEADINGS =  [`Component`, `Animation`, `Preview`];
  const TABLE_DATA = [
    {
      id: 1,
      data: [
        <Tag>H3</Tag>,
        <Tag>Fade</Tag>,
        <H3>Even the best maps are imperfect</H3>,
      ],
    },
    {
      id: 2,
      data: [
        <Tag>H3</Tag>,
        <Tag>Fade</Tag>,
        <H3>Even the best maps are flawed</H3>,
      ],
    },
    {
      id: 3,
      data: [
        <Tag>H3</Tag>,
        <Tag>Fade</Tag>,
        <H3>Even the best maps are unfinished</H3>,
      ],
    },
];
  return (

    <MetaTags>

<Snowfall
        snowflakeCount={100}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -9,
        }}
        speed={[0.1,0.5]}
        radius={[0.5, .8]}
      />
    

      <LandingPageContent />
    </MetaTags>


  );
}
