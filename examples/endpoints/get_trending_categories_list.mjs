/**
 * Get trending categories list — GET /getTrendingCategoriesList
 * Run: node examples/endpoints/get_trending_categories_list.mjs --help
 * Set JSONSCRAPER_TIKTOK_LICENSE_KEY; this example performs one licensed request.
 */
import {parseArgs} from 'node:util';
import {writeFile} from 'node:fs/promises';
import {TikTok, APIError, TransportError} from '../../src/index.js';

async function main() {
  const {values} = parseArgs({options:{"region": {"type": "string"}, "offset": {"type": "string"}, "count": {"type": "string"}, "cache_timeout": {"type": "string", "default": "60"}, "help": {"type": "boolean", "short": "h"}, "timeout": {"type": "string", "default": "30"}, "retries": {"type": "string", "default": "0"}, "output": {"type": "string"}},allowPositionals:false});
  if(values.help) {console.log("Get trending categories list\nGET /getTrendingCategoriesList\n\nEnvironment: JSONSCRAPER_TIKTOK_LICENSE_KEY\nCommon options: --timeout=30, --help\nQuery options:\n  --region=VALUE  Region (country) code. Default: US\n  --offset=VALUE  If in a response you get parameter hasMore equal to 1 then you also have cursor value for a next set of data.\n  --count=VALUE  Number of items to return. For example: 10.\n  --cache_timeout=VALUE  \n\nValues omitted from the command use the public Postman sample defaults. Replace IDs/URLs with your own inputs. Each run makes one request; live requests may consume quota.");return;}
  const key=process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY?.trim();
  if(!key) throw new Error('Set JSONSCRAPER_TIKTOK_LICENSE_KEY before making a licensed request');
  const timeout=Number(values.timeout), retries=Number(values.retries);
  if(!Number.isFinite(timeout)||timeout<=0||!Number.isInteger(retries)||retries<0||retries>5) throw new Error('Use a positive timeout and 0 to 5 retries');
  const client=new TikTok(key,{timeout:timeout*1000,retries});
  const params=Object.fromEntries(Object.entries(values).filter(([key])=>!['help','timeout','retries','output'].includes(key)));
  const response=await client.get_trending_categories_list(params);
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
