//import React from "react"
import React, { useState, useEffect } from 'react';
import {Link} from "gatsby"
import MannfrCarousel from "../components/mannfr-carousel"

export default function CategoryRoute() {
  return (
    <>
<MannfrCarousel/>

<Link to={"/"}>Mann.fr</Link>
<h1>Categrory</h1>
<p>Welcome to the category page.</p>





    </>
  )
}