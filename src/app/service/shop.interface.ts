export interface Shop {
    id?: number,
    type : number,
    owner_name: string,
    shop_activity_id: number,
    width: number,
    length: number,
    employee_number: number,
    floor_number: number,
    longitude: string,
    latitude: string,
    area: string,
    street: string,
    alley: string,
    locality: string,
    locality_number: number,
    license_number: number,
    license_type: string,
    license_date: string,
    license_end_date: string,
    billboard_name: string,
    billboard_type: string,
    billboard_width: number,
    billboard_length: number,
    billboard_height: number,
    billboard_font_type: string,
    created_at?: Date,
    updated_at?: Date
}

export interface AllproductShop {
    data: Shop[];
    status: string;
    message: string;
}
export interface returnPostShop {
    status: string;
    message: string;
}