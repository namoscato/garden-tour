export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/** @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages */
export function viewPage(url: string): void {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
}

/** @see https://developers.google.com/analytics/devguides/collection/gtagjs/events */
export function sendEvent(
  action: string,
  category: string,
  label: string,
): void {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
}
