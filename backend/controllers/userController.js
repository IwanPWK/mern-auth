// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.json({ message: "Auth User" });
});

export { authUser };
