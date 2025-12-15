export enum MenuItemType {
    WelcomeSnack,
    MainCourse,
    Dessert,
}

export interface MenuItem {
    id: number;
    name: string;
    weightGrams: number;
    type: MenuItemType;
    getCalories():number
}

export interface Client {
    name: string;
    phone: string;
}

export interface WithId {
    id: number
}