import {TikTok} from '../src/index.js';
const client=new TikTok(process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY);
console.log(await client.request('/getUserFeed',{"query": "therock", "count": 10, "max_cursor": "", "cache_timeout": 60}));
