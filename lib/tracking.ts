const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const trackInitiateCheckout = (value?: number, productName?: string) => {
  if (typeof window === "undefined") return;

  const abVariant = getCookie("ab-alimentos") || "a";

  if ((window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout", {
      content_name: productName || "Pasta Sanitária Personalizada",
      value: value || 0,
      currency: "BRL",
      ab_variant: abVariant,
    });
  }

  if ((window as any).gtag) {
    (window as any).gtag("event", "begin_checkout", {
      value: value || 0,
      currency: "BRL",
      ab_variant: abVariant,
      items: [{
        item_name: productName || "Pasta Sanitária Personalizada",
      }]
    });
  }
};

export const getHotmartUrlWithUtms = (baseUrl: string): string => {
  if (typeof window === "undefined") return baseUrl;

  try {
    const urlObj = new URL(baseUrl);
    const searchParams = new URLSearchParams(window.location.search);

    const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

    utms.forEach((utm) => {
      const val = searchParams.get(utm) || sessionStorage.getItem(utm);
      if (val) {
        urlObj.searchParams.set(utm, val);
        sessionStorage.setItem(utm, val);
      }
    });

    const abVariant = getCookie("ab-alimentos") || "a";
    urlObj.searchParams.set("sck", `alimentos|${abVariant}`);

    return urlObj.toString();
  } catch (e) {
    return baseUrl;
  }
};
