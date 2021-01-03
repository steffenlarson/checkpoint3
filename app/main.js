import ListController from "./Controllers/ListsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  listController = new ListController();
}

window["app"] = new App();
