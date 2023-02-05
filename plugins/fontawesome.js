import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faPaperPlane,
  faQuoteLeft,
  faStar,
  faCode,
  faTerminal,
  faGraduationCap,
  faSchool,
  faChalkboardUser,
  faIdCardAlt,
  faExclamationCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faGitAlt,
  faGithub,
  faGithubSquare,
  faLinkedin,
  faJs,
  faPhp,
  faNodeJs,
  faVuejs,
  faLaravel,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(
  // solid
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faPaperPlane,
  faQuoteLeft,
  faStar,
  faCode,
  faTerminal,
  faGraduationCap,
  faSchool,
  faChalkboardUser,
  faIdCardAlt,
  faExclamationCircle,
  faCheckCircle,

  // brands
  faFacebookSquare,
  faGitAlt,
  faGithub,
  faGithubSquare,
  faLinkedin,
  faJs,
  faPhp,
  faNodeJs,
  faVuejs,
  faLaravel,
  faReact
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
