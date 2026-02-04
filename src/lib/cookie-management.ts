import Cookies from "js-cookie";

const POPUP_COOKIE_NAME = "adonnow_popup_shown";
const COOKIE_EXPIRY_DAYS = 1; // Show again after 1 day

export const hasSeenPopup = (): boolean => {
  return Cookies.get(POPUP_COOKIE_NAME) === "true";
};

export const markPopupAsSeen = (): void => {
  Cookies.set(POPUP_COOKIE_NAME, "true", { expires: COOKIE_EXPIRY_DAYS });
};

export const resetPopupCookie = (): void => {
  Cookies.remove(POPUP_COOKIE_NAME);
};
