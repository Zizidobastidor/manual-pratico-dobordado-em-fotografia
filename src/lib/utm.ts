export function getCheckoutUrl(): string {
  const base = "https://pay.hotmart.com/A104682313C?off=04alisai&checkoutMode=10";

  if (typeof window === "undefined") return base;

  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get("fbclid");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");
  const utmTerm = params.get("utm_term");

  const extra = new URLSearchParams();
  if (fbclid) extra.set("fbclid", fbclid);
  if (utmSource) extra.set("utm_source", utmSource);
  if (utmMedium) extra.set("utm_medium", utmMedium);
  if (utmCampaign) extra.set("utm_campaign", utmCampaign);
  if (utmContent) extra.set("utm_content", utmContent);
  if (utmTerm) extra.set("utm_term", utmTerm);

  const extraStr = extra.toString();
  return extraStr ? `${base}&${extraStr}` : base;
}
