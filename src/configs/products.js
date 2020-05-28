import logoVerifiable from '../images/logo-verifiable.svg';
import { dockGradient, remoteGradient, shortlistGradient, verifiableGradient, primerGradient } from '../helpers/colors';
import logoDock from '../images/logo-dock.svg';
import logoRemote from '../images/logo-remote.svg';
import logoShortlist from '../images/logo-shortlist.svg';
import logoPrimer from '../images/logo-primer.svg';

export default {
  primer: {
    logo: logoPrimer,
    gradient: primerGradient,
  },
  verifiable: {
    logo: logoVerifiable,
    gradient: verifiableGradient,
  },
  dock: {
    logo: logoDock,
    gradient: dockGradient,
  },
  remote: {
    logo: logoRemote,
    gradient: remoteGradient,
  },
  shortlist: {
    logo: logoShortlist,
    gradient: shortlistGradient,
  }
};