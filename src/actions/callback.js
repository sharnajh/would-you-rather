export const SET_CALLBACK_LINK = "SET_CALLBACK_LINK";
export const UNSET_CALLBACK_LINK = "UNSET_CALLBACK_LINK";

export function setCallbackLink(callback) {
  return {
    type: SET_CALLBACK_LINK,
    callback
  };
}

export function unsetCallbackLink() {
  return {
    type: UNSET_CALLBACK_LINK
  }
}

