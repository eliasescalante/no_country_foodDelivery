export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "No tenes los permisos necesarios para acceder a esta ruta" });
    }
    next();
  };
};
