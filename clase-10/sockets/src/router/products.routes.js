import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    
  res.send("todos los productos")
})

export default router;