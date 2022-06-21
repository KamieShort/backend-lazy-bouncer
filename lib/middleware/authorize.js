module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'

  try {
    if (!req.user || res.user.email !== 'admin')
      throw new Error('Sorry! You do not have access to view this page!');

    next();
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
