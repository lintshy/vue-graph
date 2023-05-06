

export type User = {
    id?: string
    userName?: string
    firstName?: string
    lastName?: string
    title?: string
    password?: string
    inventory?: UserInventory[]

}

export type UserInventory = {
    inventoryId: string
    purchaseDate: string
}