import { useMemo } from "react";

export function useSiteTitle(title?: string) {
  return useMemo(() => {
    let siteTitle = "Ken-Ton Garden Tour";

    if (title) {
      siteTitle = `${title} – ${siteTitle}`;
    }

    return siteTitle;
  }, [title]);
}
