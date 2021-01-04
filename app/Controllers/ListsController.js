import { ProxyState } from "../AppState.js"
import ListService from "../Services/ListsService.js"

export default class ListController {

  constructor() {
    console.log("building listcontroller")
  }

  createList() {
    console.log("creating List")
    ListService.createList();
  }
}