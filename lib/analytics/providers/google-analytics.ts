import { AnalyticsProvider, PageViewEvent, AnalyticsEvent } from '../types';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export const GA_TRACKING_ID = 'G-JCJ88LN2LC';

export class GoogleAnalyticsProvider implements AnalyticsProvider {
    private isInitialized(): boolean {
        return typeof window !== 'undefined' && !!window.gtag;
    }

    pageView({ path, title, referrer }: PageViewEvent): void {
        if (!this.isInitialized()) return;

        window.gtag?.('config', GA_TRACKING_ID, {
            page_path: path,
            page_title: title,
            page_referrer: referrer,
        });
    }

    event({ name, properties }: AnalyticsEvent): void {
        if (!this.isInitialized()) return;

        window.gtag?.('event', name, properties);
    }
}
