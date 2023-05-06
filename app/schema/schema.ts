import { gql } from "apollo-server-express";

export const Schema = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    title: String
    userName: String
    inventory: [UserInventory]
  }
  type UserInventory  {
    inventoryId: String
    purchaseDate: String
  }
  type InventoryItem {
    id: String
    name: String
    category: String
    description: String
    imageUrl: String
    status: String
  }
  input UserInput{
    id: ID!
    firstName: String
    lastName: String
    title: String
    userName: String
  }
  #handle user commands
  type Query {
    getAllUsers: [User] #will return multiple User instances
    getUser(id: Int): User #has an argument of 'id' of type Integer.
    loginUser(userName: String, password: String): User
    getInventory: [InventoryItem]
    getInventoryItem(id: Int): InventoryItem
    getOpenInventory: [InventoryItem]
    
  }
  type Mutation {
    updateUser(user: UserInput): User
    purchaseInventoryItem(userId:String, inventoryId:String): String
  }
`
