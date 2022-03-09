import React from 'react';

import { HowToWorkSection } from "../components/main/how-to-work";
import { Services } from "../components/main/services";
import { OurProducts } from "../components/main/products";

export function MainPage() {
  return (<>
            <HowToWorkSection/>
            <Services/>
            <OurProducts/>
          </>);
}
