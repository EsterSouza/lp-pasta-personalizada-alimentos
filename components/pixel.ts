const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const trackInitiateCheckout = (value?: number, productName?: string) => {
  if (typeof window !== "undefined") {
    const abVersion = getCookie("ab-test-version") || "A";

    // Rastreio Facebook/Meta Pixel
    if ((window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: productName || "Pasta Sanitária Personalizada",
        value: value || 0,
        currency: "BRL",
        ab_version: abVersion,
      });
    } else {
      console.warn("Meta Pixel (fbq) não carregado ainda.");
    }

    // Rastreio Google Ads Pixel
    if ((window as any).gtag) {
      (window as any).gtag("event", "begin_checkout", {
        value: value || 0,
        currency: "BRL",
        ab_version: abVersion,
        items: [{
          item_name: productName || "Pasta Sanitária Personalizada",
        }]
      });
    } else {
      console.warn("Google Ads Pixel (gtag) não carregado ainda.");
    }
  }
};

export const getHotmartUrlWithUtms = (baseUrl: string): string => {
  if (typeof window === "undefined") return baseUrl;

  try {
    const urlObj = new URL(baseUrl);
    const searchParams = new URLSearchParams(window.location.search);
    
    // Lista de UTMs a capturar
    const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck"];
    
    // Obter parâmetros existentes ou da sessionStorage
    const paramsToAppend: { [key: string]: string } = {};
    
    utms.forEach((utm) => {
      const val = searchParams.get(utm) || sessionStorage.getItem(utm);
      if (val) {
        paramsToAppend[utm] = val;
        // Salvar na sessionStorage para persistência
        sessionStorage.setItem(utm, val);
      }
    });

    // Adicionar UTMs individuais à URL
    Object.keys(paramsToAppend).forEach((key) => {
      urlObj.searchParams.set(key, paramsToAppend[key]);
    });

    // Obter a versão do teste A/B para anexar no SRC do Hotmart
    const abVersion = getCookie("ab-test-version") || "A";

    // Criar um SRC composto para relatórios consolidados da Hotmart se houver UTMs ou A/B test
    const srcParts = [
      paramsToAppend["utm_source"] || "direto",
      paramsToAppend["utm_medium"] || "",
      paramsToAppend["utm_campaign"] || "",
      `ab_${abVersion}`
    ].filter(Boolean);
    
    urlObj.searchParams.set("src", srcParts.join("|"));

    return urlObj.toString();
  } catch (e) {
    console.error("Erro ao processar UTMs para a URL:", e);
    return baseUrl;
  }
};
