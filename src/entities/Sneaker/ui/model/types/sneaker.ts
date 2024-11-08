export interface SneakerModel {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

interface Meta {
    current_page: number
    per_page: number
    remaining_count: number
    total_items: number
    total_pages: number
}

export interface SneakerResponce {
    items: SneakerModel[];
    meta: Meta;
}


