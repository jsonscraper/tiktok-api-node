export type Params = Record<string, string | number | boolean | null | undefined>;
export interface Options { baseUrl?: string; timeout?: number; retries?: number; cacheTimeout?: number; }
export class APIError extends Error { status: number; retryAfter: string | null; }
export class TransportError extends Error {}
export class Client { constructor(key: string, options?: Options); request<T = unknown>(path: string, params?: Params): Promise<T | Uint8Array>; }
export class TikTok extends Client {
 constructor(key: string, options?: Options);
 get_no_watermark_url<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_no_watermark_url_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_video_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_video_by_url<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_unshortened_url<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_comments_by_url<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_comments_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_comments_replies<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_user<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_video<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_music<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_live<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_hashtag<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_location<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_top<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_insights<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 search_comment_suggested_users<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_info<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_info_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_basic_user_info<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_feed<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_feed_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_username_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_twitter_username<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_instagram_username<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_youtube_channel<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_followers<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_followers_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_following<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_following_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_live_event_info_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_hashtag_info<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_hashtag_feed<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_hashtag_feed_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_location_info_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_location_feed_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_music_info<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_music_feed<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_music_charts<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_trending_categories_list<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_trending_feed<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_stickers_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_sticker_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_sticker_feed_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_stories<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_story_info_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_playlists<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_user_playlist_by_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_video_by_playlist_id<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_available_ranking_list<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_ranking_info<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_live_info<T = unknown>(params?: Params): Promise<T | Uint8Array>;
 get_live_feed<T = unknown>(params?: Params): Promise<T | Uint8Array>;
}
