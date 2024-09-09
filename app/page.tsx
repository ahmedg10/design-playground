import '@root/global.scss';


import Image from "next/image";
import Navigation from "@system/Navigation";
import MetaTags from "@components/MetaTags";
import GridLayout from "@system/layouts/GridLayout";
export default function Home() {
  return (

    <MetaTags>
      <Navigation />
      <GridLayout>
      </GridLayout>
    </MetaTags>


  );
}
