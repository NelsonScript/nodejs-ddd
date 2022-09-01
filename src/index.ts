import config from "./config/env";
import api from "./config/api.config";

// api.get("/unauthorized", (req: express.Request, res: express.Response) => {
//   let message = "<h2>🚧  Unauthorized 🚷 </h2>";
//   message += "</br>";
//   message += "<h1>4️⃣0️⃣1️⃣</h1></br>";
//   res.status(401).send(message);
// });

api.listen(config.PORT, () => {

  console.log(`ℹ️ Servers from TS running at http://localhost:${config.PORT} (🔅_🔅)`);
  
  // routes.forEach((route: CommonRoutesConfig) => {
  //   debugLog(`Routes configured for ${route.getName()}`);
  // });

});




