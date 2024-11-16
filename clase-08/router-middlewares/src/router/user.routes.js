import { Router } from "express";
import { checkId } from "../middlewares/checkId.middleware.js";

const router = Router();
//Middleware a nivel router
router.use( (req, res, next) => {
  console.log("Se ejecuta un endpoint de users");

  next();
})

let users = [];

router.get("/", (req, res) => {
  res.status(200).send(users);
});

router.get("/:id", checkId, (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) return res.status(404).send("User not found");

  res.status(200).send(user);
});

router.post("/", (req, res) => {
  const user = req.body;

  const newUser = {
    id: users.length + 1,
    ...user,
  };
  users.push(newUser);
  res.status(201).send(users);
});

router.put("/:id", checkId, (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const index = users.findIndex((user) => user.id === Number(id));
  if (index === -1) return res.status(404).send("User not found");

  users[index] = {
    ...users[index],
    ...data,
  };

  res.status(200).send(users[index]);
});

router.delete("/:id", checkId, (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) return res.status(404).send("User not found");

  users = users.filter((user) => user.id !== Number(id));

  res.status(200).send("User deleted");
});

export default router;
