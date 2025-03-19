export interface AnalyticsEvent {
    name: string;
    properties?: Record<string, any>;
}

export interface PageViewEvent {
    path: string;
    query?: string;
    title?: string;
    referrer?: string;
}

export interface AnalyticsProvider {
    pageView: (data: PageViewEvent) => void;
    event: (event: AnalyticsEvent) => void;
}
