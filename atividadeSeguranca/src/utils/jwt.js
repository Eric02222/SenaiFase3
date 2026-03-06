// import jwt from "jsonwebtoken";
// import { env } from "../../env.js";
const jwt = require("jsonwebtoken")
const env = require('../../env.js')

function signAccessToken(payload) {
  console.log(env.accessTtl)
  return jwt.sign(payload, env.accessSecret, { expiresIn: Number(env.accessTtl)});
}
function signRefreshToken(payload) {
  return jwt.sign(payload, env.refreshSecret, { expiresIn: Number(env.refreshTtl)});
}
function verifyAccess(token) {
  return jwt.verify(token, env.accessSecret);
}
function verifyRefresh(token) {
  return jwt.verify(token, env.refreshSecret);
}

function getToken(token) {
  const tokenWhitoutBarrear = token.slice("Bearer " .length)
  return jwt.decode(tokenWhitoutBarrear);
} 

module.exports = {signAccessToken, signRefreshToken, verifyAccess, verifyRefresh, getToken};