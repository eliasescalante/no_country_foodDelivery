import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  // Verifico si el token está en la cookie
  if (req.cookies.cookieToken) {
    try {
      // Extraigo el token de la cookie
      token = req.cookies.cookieToken;

      // Verifico el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Vinculo el id del usuario a la consulta
      req.user = decoded;

      next();
    } catch (error) {
      res
        .status(401)
        .json({ message: "Token no válido, acceso denegado", error });
    }
  } else {
    res.status(401).json({ message: "No hay token, autorización denegada" });
  }
};
