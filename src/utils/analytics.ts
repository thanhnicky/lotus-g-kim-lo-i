declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    console.log(`Sending ${eventName} event to GA4`, params);
    window.gtag('event', eventName, params);
  } else {
    console.log('gtag not available', { eventName, hasGtag: typeof window !== "undefined" && !!window.gtag });
  }
};

export const trackZaloClick = (ctaType: string) => {
  trackEvent('zalo_click', {
    'event_category': 'engagement',
    'event_label': 'son_gia_go_kim_loai',
    'cta_type': ctaType
  });
};
