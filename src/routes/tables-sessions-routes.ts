import { Router } from "express"

import { TablesSessionsController } from "@/controllers/tables-sessions-controller"

const tablesSessionsRoutes = Router()
const tablesSessionsController = new TablesSessionsController()

//“Express, quando alguém fizer um POST nessa rota,
//chame automaticamente o método create do controller
//passando request e response.”
tablesSessionsRoutes.post("/", tablesSessionsController.create)
// dentro da classe TablesSessionsController pega o index
tablesSessionsRoutes.get("/", tablesSessionsController.index)
tablesSessionsRoutes.patch("/:id", tablesSessionsController.update)

export { tablesSessionsRoutes }