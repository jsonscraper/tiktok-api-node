import {TikTok} from '../src/index.js';
const client=new TikTok(process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY);
console.log(await client.request('/searchVideo',{"keyword": "nature", "count": 10, "cache_timeout": 60}));
