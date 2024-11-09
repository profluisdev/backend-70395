import express from "express";

const app = express();
// Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Clase 7");
});

let users = [];

app.get("/user", (req, res) => {
  res.status(200).send(users);
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) return res.status(404).send("User not found");

  res.status(200).send(user);
});

app.post("/user", (req, res) => {
  const user = req.body;

  const newUser = {
    id: users.length + 1,
    ...user,
  };
  users.push(newUser);
  res.status(201).send(users);
});

app.put("/user/:id", (req, res) => {
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

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) return res.status(404).send("User not found");

  users = users.filter((user) => user.id !== Number(id));

  res.status(200).send("User deleted");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
