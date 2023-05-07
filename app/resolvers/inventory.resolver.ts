import { inventory, users } from '../dataset'; //get all of the available data from our database.
import { InventoryItem } from '../schema';
const inventoryResolvers = {
    Query: {
        getInventory: () => inventory,
        getOpenInventory: () => inventory.filter((item) => item.status === 'Open'),
        getInventoryItem: (_: any, args: any) => {
            return inventory.find((item) => item.id === args.id)
        }

    },
    Mutation: {
        purchaseInventoryItem: (_: any, args: any) => {
            const { userId, inventoryId } = args

            const selectedInventoryItemIdx = inventory.findIndex((item) => item.id === inventoryId)
            const matchingUserIdx = users.findIndex((existingUser) => {

                return existingUser.id === userId
            })
            console.log(matchingUserIdx)
            if (matchingUserIdx < 0) {
                return null
            }
            console.log(selectedInventoryItemIdx, matchingUserIdx)
            if (selectedInventoryItemIdx !== -1) {
                users[matchingUserIdx].inventory?.push({
                    ...inventory[selectedInventoryItemIdx],
                    inventoryId: inventory[selectedInventoryItemIdx].id,
                    purchaseDate: new Date().toISOString()
                })
                inventory[selectedInventoryItemIdx].status = 'Purchased'
                return 'success'
            }
            return null

        },
    }
};

export default inventoryResolvers
