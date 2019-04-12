import session from 'express-session';
const sess = {
  secret: '42',
  cookie: { secure: false },
  resave: false,
  saveUninitialized: false
};

export const sessionMiddleware = session(sess);
