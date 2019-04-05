
export function authMiddleware (roles: string[]) {
  return (req, res, next) => {
    let isAuthorized = req.session.user && roles.includes(req.session.user.role);
    if(isAuthorized) {
      next();
    } else {
      res.sendStatus(403);
    }
  }
} 