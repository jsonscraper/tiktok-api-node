# TikTok node request examples

Every file below is a complete single-request CLI program with environment-based authentication, all documented query options, timeout configuration, error handling and full response output. Sample defaults come from Postman; replace account names, IDs and URLs for your use case. `--help` requires no API key and makes no network request.

Set `JSONSCRAPER_TIKTOK_LICENSE_KEY` and install the SDK as described in the main README. Each execution makes one live request and may consume quota. None of these programs loops through a feed automatically.

## Get non watermarked video url

[Open the complete example](endpoints/get_no_watermark_url.mjs) · `GET /getNoWatermarkUrl`

```sh
node examples/endpoints/get_no_watermark_url.mjs --help
```

## Get non watermarked video url by video ID

[Open the complete example](endpoints/get_no_watermark_url_by_id.mjs) · `GET /getNoWatermarkUrlByID`

```sh
node examples/endpoints/get_no_watermark_url_by_id.mjs --help
```

## Get video info by ID

[Open the complete example](endpoints/get_video_by_id.mjs) · `GET /getVideoByID`

```sh
node examples/endpoints/get_video_by_id.mjs --help
```

## Get video info by URL

[Open the complete example](endpoints/get_video_by_url.mjs) · `GET /getVideoByUrl`

```sh
node examples/endpoints/get_video_by_url.mjs --help
```

## Convert short TikTok video URL to full TikTok video URL

[Open the complete example](endpoints/get_unshortened_url.mjs) · `GET /getUnshortenedUrl`

```sh
node examples/endpoints/get_unshortened_url.mjs --help
```

## Get comments list by video URL

[Open the complete example](endpoints/get_comments_by_url.mjs) · `GET /getCommentsByUrl`

```sh
node examples/endpoints/get_comments_by_url.mjs --help
```

## Get comments list by video ID

[Open the complete example](endpoints/get_comments_by_id.mjs) · `GET /getCommentsByID`

```sh
node examples/endpoints/get_comments_by_id.mjs --help
```

## Get comments replies

[Open the complete example](endpoints/get_comments_replies.mjs) · `GET /getCommentsReplies`

```sh
node examples/endpoints/get_comments_replies.mjs --help
```

## Search for user by keyword

[Open the complete example](endpoints/search_user.mjs) · `GET /searchUser`

```sh
node examples/endpoints/search_user.mjs --help
```

## Search for video by keyword

[Open the complete example](endpoints/search_video.mjs) · `GET /searchVideo`

```sh
node examples/endpoints/search_video.mjs --help
```

## Search for music by keyword

[Open the complete example](endpoints/search_music.mjs) · `GET /searchMusic`

```sh
node examples/endpoints/search_music.mjs --help
```

## Search for live by keyword

[Open the complete example](endpoints/search_live.mjs) · `GET /searchLive`

```sh
node examples/endpoints/search_live.mjs --help
```

## Search for hashtag by keyword

[Open the complete example](endpoints/search_hashtag.mjs) · `GET /searchHashtag`

```sh
node examples/endpoints/search_hashtag.mjs --help
```

## Search for location by keyword

[Open the complete example](endpoints/search_location.mjs) · `GET /searchLocation`

```sh
node examples/endpoints/search_location.mjs --help
```

## Top search by text query

[Open the complete example](endpoints/search_top.mjs) · `GET /searchTop`

```sh
node examples/endpoints/search_top.mjs --help
```

## Search insights by text query

[Open the complete example](endpoints/search_insights.mjs) · `GET /searchInsights`

```sh
node examples/endpoints/search_insights.mjs --help
```

## Search comment suggested users

[Open the complete example](endpoints/search_comment_suggested_users.mjs) · `GET /searchCommentSuggestedUsers`

```sh
node examples/endpoints/search_comment_suggested_users.mjs --help
```

## Get user info by profile URL or nickname

[Open the complete example](endpoints/get_user_info.mjs) · `GET /getUserInfo`

```sh
node examples/endpoints/get_user_info.mjs --help
```

## Get user info by profile ID

[Open the complete example](endpoints/get_user_info_by_id.mjs) · `GET /getUserInfoByID`

```sh
node examples/endpoints/get_user_info_by_id.mjs --help
```

## Get user info by username

[Open the complete example](endpoints/get_basic_user_info.mjs) · `GET /getBasicUserInfo`

```sh
node examples/endpoints/get_basic_user_info.mjs --help
```

## Get user feed by profile URL or nickname

[Open the complete example](endpoints/get_user_feed.mjs) · `GET /getUserFeed`

```sh
node examples/endpoints/get_user_feed.mjs --help
```

## Get user feed by profile ID

[Open the complete example](endpoints/get_user_feed_by_id.mjs) · `GET /getUserFeedByID`

```sh
node examples/endpoints/get_user_feed_by_id.mjs --help
```

## Get user ID by profile URL or nickname

[Open the complete example](endpoints/get_user_id.mjs) · `GET /getUserID`

```sh
node examples/endpoints/get_user_id.mjs --help
```

## Get username by TikTok user ID

[Open the complete example](endpoints/get_username_by_id.mjs) · `GET /getUsernameByID`

```sh
node examples/endpoints/get_username_by_id.mjs --help
```

## Get Twitter username by profile URL, nickname or TikTok user ID

[Open the complete example](endpoints/get_twitter_username.mjs) · `GET /getTwitterUsername`

```sh
node examples/endpoints/get_twitter_username.mjs --help
```

## Get Instagram username by profile URL, nickname or TikTok user ID

[Open the complete example](endpoints/get_instagram_username.mjs) · `GET /getInstagramUsername`

```sh
node examples/endpoints/get_instagram_username.mjs --help
```

## Get YouTube channel info by profile URL, nickname or TikTok user ID

[Open the complete example](endpoints/get_youtube_channel.mjs) · `GET /getYoutubeChannel`

```sh
node examples/endpoints/get_youtube_channel.mjs --help
```

## Get user followers by profile URL or nickname

[Open the complete example](endpoints/get_followers.mjs) · `GET /getFollowers`

```sh
node examples/endpoints/get_followers.mjs --help
```

## Get user followers by profile ID

[Open the complete example](endpoints/get_followers_by_id.mjs) · `GET /getFollowersByID`

```sh
node examples/endpoints/get_followers_by_id.mjs --help
```

## Get user following by profile URL or nickname

[Open the complete example](endpoints/get_following.mjs) · `GET /getFollowing`

```sh
node examples/endpoints/get_following.mjs --help
```

## Get user following by profile ID

[Open the complete example](endpoints/get_following_by_id.mjs) · `GET /getFollowingByID`

```sh
node examples/endpoints/get_following_by_id.mjs --help
```

## Get live event info by ID

[Open the complete example](endpoints/get_live_event_info_by_id.mjs) · `GET /getLiveEventInfoByID`

```sh
node examples/endpoints/get_live_event_info_by_id.mjs --help
```

## Get hashtag info by URL or tag name

[Open the complete example](endpoints/get_hashtag_info.mjs) · `GET /getHashtagInfo`

```sh
node examples/endpoints/get_hashtag_info.mjs --help
```

## Get hashtag feed by URL or tag name

[Open the complete example](endpoints/get_hashtag_feed.mjs) · `GET /getHashtagFeed`

```sh
node examples/endpoints/get_hashtag_feed.mjs --help
```

## Get hashtag feed by ID

[Open the complete example](endpoints/get_hashtag_feed_by_id.mjs) · `GET /getHashtagFeedByID`

```sh
node examples/endpoints/get_hashtag_feed_by_id.mjs --help
```

## Get location info by ID

[Open the complete example](endpoints/get_location_info_by_id.mjs) · `GET /getLocationInfoByID`

```sh
node examples/endpoints/get_location_info_by_id.mjs --help
```

## Get videos by location ID

[Open the complete example](endpoints/get_location_feed_by_id.mjs) · `GET /getLocationFeedByID`

```sh
node examples/endpoints/get_location_feed_by_id.mjs --help
```

## Get music info by URL or ID

[Open the complete example](endpoints/get_music_info.mjs) · `GET /getMusicInfo`

```sh
node examples/endpoints/get_music_info.mjs --help
```

## Get music feed by URL or ID

[Open the complete example](endpoints/get_music_feed.mjs) · `GET /getMusicFeed`

```sh
node examples/endpoints/get_music_feed.mjs --help
```

## Get music charts

[Open the complete example](endpoints/get_music_charts.mjs) · `GET /getMusicCharts`

```sh
node examples/endpoints/get_music_charts.mjs --help
```

## Get trending categories list

[Open the complete example](endpoints/get_trending_categories_list.mjs) · `GET /getTrendingCategoriesList`

```sh
node examples/endpoints/get_trending_categories_list.mjs --help
```

## Get trending feed

[Open the complete example](endpoints/get_trending_feed.mjs) · `GET /getTrendingFeed`

```sh
node examples/endpoints/get_trending_feed.mjs --help
```

## Get effect information by IDs

[Open the complete example](endpoints/get_stickers_by_id.mjs) · `GET /getStickersByID`

```sh
node examples/endpoints/get_stickers_by_id.mjs --help
```

## Get effect information by ID

[Open the complete example](endpoints/get_sticker_by_id.mjs) · `GET /getStickerByID`

```sh
node examples/endpoints/get_sticker_by_id.mjs --help
```

## Get videos by effect ID

[Open the complete example](endpoints/get_sticker_feed_by_id.mjs) · `GET /getStickerFeedByID`

```sh
node examples/endpoints/get_sticker_feed_by_id.mjs --help
```

## Get user stories

[Open the complete example](endpoints/get_user_stories.mjs) · `GET /getUserStories`

```sh
node examples/endpoints/get_user_stories.mjs --help
```

## Get story info by ID

[Open the complete example](endpoints/get_story_info_by_id.mjs) · `GET /getStoryInfoByID`

```sh
node examples/endpoints/get_story_info_by_id.mjs --help
```

## Get user playlists

[Open the complete example](endpoints/get_user_playlists.mjs) · `GET /getUserPlaylists`

```sh
node examples/endpoints/get_user_playlists.mjs --help
```

## Get user playlist by ID

[Open the complete example](endpoints/get_user_playlist_by_id.mjs) · `GET /getUserPlaylistByID`

```sh
node examples/endpoints/get_user_playlist_by_id.mjs --help
```

## Get video by playlist ID

[Open the complete example](endpoints/get_video_by_playlist_id.mjs) · `GET /getVideoByPlaylistID`

```sh
node examples/endpoints/get_video_by_playlist_id.mjs --help
```

## Get available ranking list

[Open the complete example](endpoints/get_available_ranking_list.mjs) · `GET /getAvailableRankingList`

```sh
node examples/endpoints/get_available_ranking_list.mjs --help
```

## Get ranking info

[Open the complete example](endpoints/get_ranking_info.mjs) · `GET /getRankingInfo`

```sh
node examples/endpoints/get_ranking_info.mjs --help
```

## Get live info

[Open the complete example](endpoints/get_live_info.mjs) · `GET /getLiveInfo`

```sh
node examples/endpoints/get_live_info.mjs --help
```

## Get live feed

[Open the complete example](endpoints/get_live_feed.mjs) · `GET /getLiveFeed`

```sh
node examples/endpoints/get_live_feed.mjs --help
```

