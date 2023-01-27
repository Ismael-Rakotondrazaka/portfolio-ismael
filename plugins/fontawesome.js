import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faPaperPlane,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(
  // solid
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faPaperPlane,
  faQuoteLeft,

  // brands
  faFacebookSquare,
  faGithubSquare,
  faLinkedin
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
