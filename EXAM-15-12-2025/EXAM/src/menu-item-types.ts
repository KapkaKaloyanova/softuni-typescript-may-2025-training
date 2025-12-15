import { MenuItem, MenuItemType, WithId } from "./models.js";
import { ConvertToEuro } from "./decorators.js";

export abstract class BaseMenuItem implements MenuItem {
    
    constructor(
        public id: number,
        public name: string,
        public weightGrams: number,
        public type: MenuItemType,
        protected _basePrice?: number,
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
    public hasCream: boolean;
    constructor(
        id: number,
        name: string,
        weightGrams: number,
        hasCream: boolean,

    ) {
        const itemType: MenuItemType = MenuItemType.WelcomeSnack;
        super(id, name, weightGrams, itemType )
        this.hasCream = hasCream;

    }
    getCalories(): number {
        const calories = (this.weightGrams * 1.2) + (this.hasCream ? 20 : 0);
        return calories
    }

}

export class MainCourse extends BaseMenuItem {
    public fatGrams: number;
    constructor(
        id: number,
        name: string,
        weightGrams: number,
        fatGrams: number,
        basePrice?: number,
    ) {
        const itemType: MenuItemType = MenuItemType.MainCourse;
        super(id, name, weightGrams, itemType)
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
        hasSugar: boolean,
        basePrice?: number,
    ) {
        const itemType: MenuItemType = MenuItemType.Dessert;
        super(id, name, weightGrams, itemType)
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

