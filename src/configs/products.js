import logoVerifiable from '../images/logo-verifiable.svg';
import { dockGradient, remoteGradient, shortlistGradient, verifiableGradient } from '../helpers/colors';
import logoDock from '../images/logo-dock.svg';
import logoRemote from '../images/logo-remote.svg';
import logoShortlist from '../images/logo-shortlist.svg';

export default {
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