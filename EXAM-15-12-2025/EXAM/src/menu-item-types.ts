import { MenuItem, MenuItemType, WithId } from "./models.js";
import { ConvertToEuro } from "./decorators.js";

export abstract class BaseMenuItem implements MenuItem {
    protected _basePrice?: number;

    constructor(
        public id: number,
        public name: string,
        public weightGrams: number,
        public type: MenuItemType
    ) {
    }

    get basePrice(): number | undefined {
        return this._basePrice
    }
    @ConvertToEuro
    get finalPrice(): number | undefined {
        return this._basePrice;
    }

    abstract getCalories(): number; // to calculate dish calories
}

export class WelcomeSnack extends BaseMenuItem {
    hasCream: boolean;
    constructor(id: number,
        name: string,
        weightGrams: number,
        type: MenuItemType,
        hasCream: boolean,
        basePrice: number,
    ) {
        super(id, name, weightGrams, type)
        this.hasCream = hasCream;
        this._basePrice = basePrice

    }
    getCalories(): number {
        const calories = (this.weightGrams * 1.2) + (this.hasCream ? 20 : 0);
        return calories
    }

}

export class MainCourse extends BaseMenuItem {
    fatGrams: number;
    constructor(id: number,
        name: string,
        weightGrams: number,
        type: MenuItemType,
        fatGrams: number,
        basePrice: number,
    ) {
        super(id, name, weightGrams, type)
        this._basePrice = basePrice
        this.fatGrams = fatGrams
    }

    getCalories(): number {
        const calories = (this.weightGrams * 2) + (this.fatGrams * 3);
        return calories
    }
}

export class Dessert extends BaseMenuItem {
    hasSugar: boolean;
    constructor(id: number,
        name: string,
        weightGrams: number,
        type: MenuItemType,
        hasSugar: boolean,
        basePrice: number,
    ) {
        super(id, name, weightGrams, type)
        this._basePrice = basePrice
        this.hasSugar = hasSugar
    }

    getCalories(): number {
        const calories = (this.weightGrams * 2.5) + (this.hasSugar ? 100 : 0);
        return calories
    }
}

export function findItemById<T extends WithId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id)

}

export function calculateTotalCalories(items: MenuItem[]):number {
    return items.reduce((acc, item)=>{
        return acc + item.getCalories();
    }, 0);
}