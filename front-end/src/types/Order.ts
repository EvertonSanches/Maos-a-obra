export interface Order {
    id: number;
    title: string;
    description: string;
    status: string;

    createdAt: string;
    scheduledAt?: string;
    finishedAt?: string;

    estimatedValue?: number;

    providerId?: number;
}