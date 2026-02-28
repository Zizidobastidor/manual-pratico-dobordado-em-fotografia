export function getCheckoutUrl(): string {
  const base = "https://pay.hotmart.com/A104682313C?off=04alisai&checkoutMode=10";
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck"];
  const utmParams = new URLSearchParams();

  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) utmParams.set(key, value);
  });

  const utmString = utmParams.toString();
  return utmString ? `${base}&${utmString}` : base;
}
