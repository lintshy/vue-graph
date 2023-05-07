import { InventoryItem } from "./inventory.type"


export type User = {
    id?: string
    userName?: string
    firstName?: string
    lastName?: string
    title?: string
    password?: string
    inventory?: UserInventory[]

}

export type UserInventory = InventoryItem & {
    inventoryId: string
    purchaseDate: string
}