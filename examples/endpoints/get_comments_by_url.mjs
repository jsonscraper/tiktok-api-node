/**
 * Get comments list by video URL — GET /getCommentsByUrl
 * Run: node examples/endpoints/get_comments_by_url.mjs --help
 * Set JSONSCRAPER_TIKTOK_LICENSE_KEY; this example performs one licensed request.
 */
import {parseArgs} from 'node:util';
import {writeFile} from 'node:fs/promises';
import {TikTok, APIError, TransportError} from '../../src/index.js';

async function main() {
  const {values} = parseArgs({options:{"video_url": {"type": "string", "default": "https://www.tiktok.com/@onerepublic/video/7141505394869898538"}, "region": {"type": "string"}, "cursor": {"type": "string"}, "count": {"type": "string"}, "cache_timeout": {"type": "string", "default": "60"}, "help": {"type": "boolean", "short": "h"}, "timeout": {"type": "string", "default": "30"}, "retries": {"type": "string", "default": "0"}, "output": {"type": "string"}},allowPositionals:false});
  if(values.help) {console.log("Get comments list by video URL\nGET /getCommentsByUrl\n\nEnvironment: JSONSCRAPER_TIKTOK_LICENSE_KEY\nCommon options: --timeout=30, --help\nQuery options:\n  --video_url=VALUE  TikTok video URL.\n  --region=VALUE  Region (country) code. Default: US\n  --cursor=VALUE  Used for scrolling (pagination) in comments items, you can get cursor value from the previous response.\n  --count=VALUE  Number of comments you want to get. For example: 30.\n  --cache_timeout=VALUE  Cache timeout in seconds. By default we use caching system with 3600 seconds window to speed up next requests to API. If you want to disable caching, you can set 0 here.\n\nValues omitted from the command use the public Postman sample defaults. Replace IDs/URLs with your own inputs. Each run makes one request; live requests may consume quota.");return;}
  const key=process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY?.trim();
  if(!key) throw new Error('Set JSONSCRAPER_TIKTOK_LICENSE_KEY before making a licensed request');
  const timeout=Number(values.timeout), retries=Number(values.retries);
  if(!Number.isFinite(timeout)||timeout<=0||!Number.isInteger(retries)||retries<0||retries>5) throw new Error('Use a positive timeout and 0 to 5 retries');
  const client=new TikTok(key,{timeout:timeout*1000,retries});
  const params=Object.fromEntries(Object.entries(values).filter(([key])=>!['help','timeout','retries','output'].includes(key)));
  const response=await client.get_comments_by_url(params);
  if(response instanceof Uint8Array) {
    if(!values.output) throw new Error('Binary response: provide --output=filename');
    await writeFile(values.output,response);return;
  }
  if(!response || response.status!=='ok' || response.rate_limit_reached) {
    console.error('The API returned an application error or quota limit. Inspect the envelope below.');
    console.log(JSON.stringify(response,null,2));process.exitCode=1;return;
  }
  const rendered=JSON.stringify(response,null,2)+'\n';
  if(values.output) await writeFile(values.output,rendered,'utf8');else process.stdout.write(rendered);
}
main().catch(error=>{
  if(error instanceof APIError) console.error(`HTTP ${error.status}. Check access, parameters and quota. Retry-After: ${error.retryAfter||'not provided'}`);
  else if(error instanceof TransportError) console.error(error.message);
  else console.error(error.message);
  process.exitCode=1;
});
