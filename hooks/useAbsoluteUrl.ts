import { useMemo } from "react";

export function useAbsoluteUrl(path = "") {
  return useMemo(() => {
    return `https://${
      process.env.NEXT_PUBLIC_CANONICAL_URL ||
      process.env.NEXT_PUBLIC_VERCEL_URL
    }${path}`;
  }, [path]);
}
