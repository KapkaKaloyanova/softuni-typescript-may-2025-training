import { BaseMenuItem, findItemById } from "./menu-item-types.js";
import { Client, MenuItemType } from "./models.js";

export class MenuManager {
    private menuItems: BaseMenuItem[] = [];
    private itemClients: Map<number, Client[]> = new Map();

    constructor() {

    }

    addMenuItem(item: BaseMenuItem): string {
        this.menuItems.push(item)
        return `Menu item "${item.name}" (ID: ${item.id}) has been added.`
    };

    registerClient(itemId: number, client: Client): string {
        const item = findItemById(this.menuItems, itemId);
        if (!item) {
            return `Error: Menu item with ID ${itemId} not found.`;
        }
        let clientsForThisItem = this.itemClients.get(itemId)
        if (!clientsForThisItem) {
            clientsForThisItem = [];
            this.itemClients.set(itemId, clientsForThisItem);
        }
        clientsForThisItem.push(client)
        return `Client ${client.name} registered for menu item ID ${item.id} successfully.`

    };

    listAllItems(): string[] {
        console.log('--- List of All Menu Items ---');
        return this.menuItems.map(item => {
            return `[${MenuItemType[item.type].toUpperCase()}] ${item.name} (${item.weightGrams}g) - Calories: ${item.getCalories().toFixed(2)}`;
        });
    };


    findMenuItem(itemId: number): BaseMenuItem | undefined {
        return findItemById(this.menuItems, itemId)
    }
};

