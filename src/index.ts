import config from "./config/env";
import api from "./config/api.config";

// api.get("/unauthorized", (req: express.Request, res: express.Response) => {
//   let message = "<h2>đ§  Unauthorized đˇ </h2>";
//   message += "</br>";
//   message += "<h1>4ī¸âŖ0ī¸âŖ1ī¸âŖ</h1></br>";
//   res.status(401).send(message);
// });

api.listen(config.PORT, () => {

  console.log(`âšī¸ Servers from TS running at http://localhost:${config.PORT} (đ_đ)`);
  
  // routes.forEach((route: CommonRoutesConfig) => {
  //   debugLog(`Routes configured for ${route.getName()}`);
  // });

});




