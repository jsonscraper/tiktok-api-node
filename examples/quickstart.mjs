import {TikTok, APIError} from '../src/index.js';

const client = new TikTok(process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY, {timeout: 30000, retries: 1});
try {
  const response = await client.get_user_info({query: 'therock', cache_timeout: 60});
  if (response.status !== 'ok') throw new Error('The API returned an application error');
  console.log(response.tiktok);
} catch (error) {
  if (error instanceof APIError) console.error('HTTP', error.status);
  else throw error;
}
