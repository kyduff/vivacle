import Redis from "ioredis";

const client = new Redis("rediss://:fc3911c7402847259700bed8bfc4ce97@eu1-driven-sawfly-37251.upstash.io:37251");

export { client }