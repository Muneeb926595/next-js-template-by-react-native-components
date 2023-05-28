class _Images {
  readonly SessionExpired = require("../assets/images/session-expired.png");
  readonly HeaderLogo = require("../assets/images/header-logo.png");
  readonly TokensListing = require("../assets/images/tokens-listing.png");
  readonly Cards = require("../assets/images/cards.png");
}

/**
 * Animations like lottie, gif, AnimationObjects
 */
class _Animation {
  readonly bell = require("../assets/lottie/icon-lottie-bell.json");
  readonly dot = require("../assets/lottie/icon-dot.json");
  readonly splash = require("../assets/lottie/icon-splash.json");
  readonly loading = require("../assets/lottie/loading.json");
}
export const Images = new _Images();
export const Animation = new _Animation();
