import {TikTok} from '../src/index.js';
const client=new TikTok(process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY);
console.log(await client.request('/getVideoByID',{"video_id": "7106855913906081070", "cache_timeout": 60}));
