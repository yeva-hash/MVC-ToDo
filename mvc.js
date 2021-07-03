// m = model = данные
// v = view = управление данными
// c = controller = соеденяет пользователя и приложение

import { View } from "./view.js";

import { Model } from "./model.js";

import { Controller } from "./controller.js";

const app = new Controller(new Model(), new View());
