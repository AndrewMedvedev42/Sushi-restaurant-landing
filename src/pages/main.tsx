import React from 'react';

import { NavigationBar } from "../components/navigation-bar";
import { Home } from "../components/main/home";
import { HowToWorkSection } from "../components/main/how-to-work";
import { Services } from "../components/main/services";
import { OurProducts } from "../components/main/products";
import { Footer } from "../components/footer";

export function MainPage() {
  return (<>
            <NavigationBar/>
            <Home/>
            <HowToWorkSection/>
            <Services/>
            <OurProducts/>
            <Footer/>
          </>);
}
