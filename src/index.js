import JSONbigFactory from 'json-bigint';
const JSONbig=JSONbigFactory({storeAsString:true,protoAction:'error',constructorAction:'error'});
export class APIError extends Error {
  constructor(status, retryAfter) { super(`jsonscraper API returned HTTP ${status}`); this.name='APIError'; this.status=status; this.retryAfter=retryAfter; }
}
export class TransportError extends Error {}
export class Client {
  #key;
  constructor(licenseKey, {baseUrl, timeout=30000, retries=0, cacheTimeout}={}) {
    if (typeof licenseKey!=='string' || !licenseKey.trim()) throw new TypeError('A license key is required');
    const url=new URL(baseUrl || 'https://tiktok.evelode.com');
    if (url.username || url.password || url.search || url.hash || !['http:','https:'].includes(url.protocol) || (url.protocol!=='https:' && !['localhost','127.0.0.1','[::1]'].includes(url.hostname))) throw new TypeError('Use an HTTPS base URL');
    if (!Number.isFinite(timeout) || timeout<=0 || !Number.isInteger(retries) || retries<0 || retries>5) throw new TypeError('Invalid timeout or retries');
    this.#key=licenseKey; this.baseUrl=url.href.replace(/\/$/,''); this.timeout=timeout; this.retries=retries; this.cacheTimeout=cacheTimeout;
  }
  async request(path, params={}) {
    if (typeof path!=='string' || !/^\/[A-Za-z0-9_/-]+$/.test(path) || path.includes('//') || path.includes('..')) throw new TypeError('Use an API path, not a URL');
    const url=new URL(this.baseUrl+path);
    for(const [key,value] of Object.entries(params)) if(value!=null && key!=='license_key') url.searchParams.set(key,String(value));
    if(this.cacheTimeout!=null && !url.searchParams.has('cache_timeout')) url.searchParams.set('cache_timeout',String(this.cacheTimeout));
    url.searchParams.set('license_key',this.#key);
    for(let attempt=0;attempt<=this.retries;attempt++) {
      let delay;
      try {
        const response=await fetch(url,{headers:{Accept:'application/json','User-Agent':'jsonscraper-node/0.1.1'},redirect:'manual',signal:AbortSignal.timeout(this.timeout)});
        if(response.ok) return (response.headers.get('content-type')||'').includes('json') ? JSONbig.parse(await response.text()) : new Uint8Array(await response.arrayBuffer());
        const retryAfter=response.headers.get('retry-after');
        await response.body?.cancel();
        if(attempt===this.retries || ![429,502,503,504].includes(response.status)) throw new APIError(response.status,retryAfter);
        delay=retryAfter && /^\d+$/.test(retryAfter) ? Math.min(60,Number(retryAfter)) : Math.min(2**attempt,30);
      } catch(error) { if(error instanceof APIError) throw error; throw new TransportError('Unable to read jsonscraper API response'); }
      await new Promise(resolve=>setTimeout(resolve,delay*1000));
    }
  }
}
export class TikTok extends Client {
  constructor(key,options={}){super(key,options);}
  get_no_watermark_url(params={}){return this.request('/getNoWatermarkUrl',params);}
  get_no_watermark_url_by_id(params={}){return this.request('/getNoWatermarkUrlByID',params);}
  get_video_by_id(params={}){return this.request('/getVideoByID',params);}
  get_video_by_url(params={}){return this.request('/getVideoByUrl',params);}
  get_unshortened_url(params={}){return this.request('/getUnshortenedUrl',params);}
  get_comments_by_url(params={}){return this.request('/getCommentsByUrl',params);}
  get_comments_by_id(params={}){return this.request('/getCommentsByID',params);}
  get_comments_replies(params={}){return this.request('/getCommentsReplies',params);}
  search_user(params={}){return this.request('/searchUser',params);}
  search_video(params={}){return this.request('/searchVideo',params);}
  search_music(params={}){return this.request('/searchMusic',params);}
  search_live(params={}){return this.request('/searchLive',params);}
  search_hashtag(params={}){return this.request('/searchHashtag',params);}
  search_location(params={}){return this.request('/searchLocation',params);}
  search_top(params={}){return this.request('/searchTop',params);}
  search_insights(params={}){return this.request('/searchInsights',params);}
  search_comment_suggested_users(params={}){return this.request('/searchCommentSuggestedUsers',params);}
  get_user_info(params={}){return this.request('/getUserInfo',params);}
  get_user_info_by_id(params={}){return this.request('/getUserInfoByID',params);}
  get_basic_user_info(params={}){return this.request('/getBasicUserInfo',params);}
  get_user_feed(params={}){return this.request('/getUserFeed',params);}
  get_user_feed_by_id(params={}){return this.request('/getUserFeedByID',params);}
  get_user_id(params={}){return this.request('/getUserID',params);}
  get_username_by_id(params={}){return this.request('/getUsernameByID',params);}
  get_twitter_username(params={}){return this.request('/getTwitterUsername',params);}
  get_instagram_username(params={}){return this.request('/getInstagramUsername',params);}
  get_youtube_channel(params={}){return this.request('/getYoutubeChannel',params);}
  get_followers(params={}){return this.request('/getFollowers',params);}
  get_followers_by_id(params={}){return this.request('/getFollowersByID',params);}
  get_following(params={}){return this.request('/getFollowing',params);}
  get_following_by_id(params={}){return this.request('/getFollowingByID',params);}
  get_live_event_info_by_id(params={}){return this.request('/getLiveEventInfoByID',params);}
  get_hashtag_info(params={}){return this.request('/getHashtagInfo',params);}
  get_hashtag_feed(params={}){return this.request('/getHashtagFeed',params);}
  get_hashtag_feed_by_id(params={}){return this.request('/getHashtagFeedByID',params);}
  get_location_info_by_id(params={}){return this.request('/getLocationInfoByID',params);}
  get_location_feed_by_id(params={}){return this.request('/getLocationFeedByID',params);}
  get_music_info(params={}){return this.request('/getMusicInfo',params);}
  get_music_feed(params={}){return this.request('/getMusicFeed',params);}
  get_music_charts(params={}){return this.request('/getMusicCharts',params);}
  get_trending_categories_list(params={}){return this.request('/getTrendingCategoriesList',params);}
  get_trending_feed(params={}){return this.request('/getTrendingFeed',params);}
  get_stickers_by_id(params={}){return this.request('/getStickersByID',params);}
  get_sticker_by_id(params={}){return this.request('/getStickerByID',params);}
  get_sticker_feed_by_id(params={}){return this.request('/getStickerFeedByID',params);}
  get_user_stories(params={}){return this.request('/getUserStories',params);}
  get_story_info_by_id(params={}){return this.request('/getStoryInfoByID',params);}
  get_user_playlists(params={}){return this.request('/getUserPlaylists',params);}
  get_user_playlist_by_id(params={}){return this.request('/getUserPlaylistByID',params);}
  get_video_by_playlist_id(params={}){return this.request('/getVideoByPlaylistID',params);}
  get_available_ranking_list(params={}){return this.request('/getAvailableRankingList',params);}
  get_ranking_info(params={}){return this.request('/getRankingInfo',params);}
  get_live_info(params={}){return this.request('/getLiveInfo',params);}
  get_live_feed(params={}){return this.request('/getLiveFeed',params);}
}
