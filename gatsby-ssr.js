import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/graffiti-city.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Roboto-Light.ttf"
      as="font"
      type="font/"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}