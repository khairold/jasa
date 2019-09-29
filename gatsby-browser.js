/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("./src/styles/global.css")
require("typeface-roboto")

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location)
  // const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

  window.scrollTo(...(currentPosition || [0, 0]))

  return false
}
