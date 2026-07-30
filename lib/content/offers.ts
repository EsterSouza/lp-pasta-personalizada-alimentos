// Ofertas / checkout — Pasta Sanitaria Personalizada para Alimentacao (Hotmart).
// getHotmartUrlWithUtms() (lib/tracking.ts) anexa sck=alimentos|<variante> + UTMs de origem.
// NUNCA hardcodar URL de checkout fora daqui.

export const OFFERS = {
  digital: {
    id: "digital",
    name: "Pasta Digital",
    price: 497,
    priceLabel: "R$ 497,00",
    installment: "12x de R$ 51,40",
    hotmartId: "A106157606C",
    url: "https://pay.hotmart.com/A106157606C?checkoutMode=10",
  },
  fisicaPB: {
    id: "pb",
    name: "Física P&B + Digital",
    price: 697,
    priceLabel: "R$ 697,00",
    installment: "12x de R$ 72,09",
    hotmartId: "A106162381P",
    url: "https://pay.hotmart.com/A106162381P",
  },
  fisicaColorida: {
    id: "colorida",
    name: "Física Colorida + Digital",
    price: 857,
    priceLabel: "R$ 857,00",
    installment: "12x de R$ 88,63",
    hotmartId: "Q106162166E",
    url: "https://pay.hotmart.com/Q106162166E",
  },
} as const

export const OFFER_LIST = [OFFERS.digital, OFFERS.fisicaPB, OFFERS.fisicaColorida]

export const PRIMARY_CHECKOUT = OFFERS.digital.url

export const PRICING = {
  lowPrice: "497.00",
  highPrice: "857.00",
  currency: "BRL",
} as const
