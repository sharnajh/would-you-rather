import { SET_CALLBACK_LINK, UNSET_CALLBACK_LINK } from "../actions/callback";

export default function callback(state = null, action) {
  switch (action.type) {
    case SET_CALLBACK_LINK:
      return action.callback;
    case UNSET_CALLBACK_LINK:
      return "/would-you-rather"
    default:
      return state;
  }
}
