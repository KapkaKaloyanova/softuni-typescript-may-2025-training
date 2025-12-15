import { BaseMenuItem } from "./menu-item-types.js";
import { Client } from "./models.js";

export class MenuManager{
    private menuItems: BaseMenuItem [] = [];
    private itemClients: Map<number, Client[]> = new Map();

    constructor(){

    }

    addMenuItem(item: BaseMenuItem): string{
        this.menuItems.push(item)
        return `Menu item ${item.name}" (ID: ${item.id}) has been added.`
    };

    registerClient(itemId: number, client: Client): string{

    };

    listAllItems (): string[]{

    };

    findMenuItem(itemId: number): BaseMenuItem | undefined{

    }
}