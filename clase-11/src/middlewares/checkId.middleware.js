export const checkId = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) return res.send("Debe ingresar un id numérico");

  // Next nos permite continuar con el flujo de la ruta
  next();
};
