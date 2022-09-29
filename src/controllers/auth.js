import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { loginUser,registerUser } from '../services/auth'

export const login = asyncHandler(async (req, res) => {
  const result = await loginUser(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Failed to login user' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, status: 200, data: result, message: 'Failed to login successfully' })
})

export const register = asyncHandler(async (req, res) => {
    const result = await registerUser(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to add user' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, status: 200, data: result, message: 'User added successfully' })
  })

