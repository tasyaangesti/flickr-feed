const Redis = require("ioredis");

const REDIS_KEY = process.env.REDIS_KEY;

const redis = new Redis({
  port: 12151,
  host: "redis-12151.c275.us-east-1-4.ec2.redns.redis-cloud.com",
  password: REDIS_KEY,
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = redis;
