# TikTok Scraper API for Node.js & TypeScript

[![Latest release](https://img.shields.io/github/v/tag/jsonscraper/tiktok-api-node?label=release&style=flat-square)](https://github.com/jsonscraper/tiktok-api-node/tags)
[![Node.js requirements](https://img.shields.io/badge/Node.js-20%2B-339933?logo=nodedotjs&logoColor=white&style=flat-square)](#1-install)
[![Last commit](https://img.shields.io/github/last-commit/jsonscraper/tiktok-api-node?style=flat-square)](https://github.com/jsonscraper/tiktok-api-node/commits)
[![MIT license](https://img.shields.io/github/license/jsonscraper/tiktok-api-node?style=flat-square)](../LICENSE)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/evelode/workspace/evelode/collection/24862082-d886cc87-4267-4e0c-b57a-2d083add50ad)


Official Node.js & TypeScript client for the [jsonscraper TikTok Scraper API](https://jsonscraper.com/services/tiktok-scraper-api?utm_source=github&utm_medium=sdk&utm_campaign=tiktok-api-node&utm_content=readme). **54 documented GET routes**, simple installation, configurable requests, working examples, and responses ready for your application.

![From API access to your first JSON response](quickstart.svg)

**[Get an API key](https://jsonscraper.com/services/tiktok-scraper-api?utm_source=github&utm_medium=sdk&utm_campaign=tiktok-api-node&utm_content=get_access) · [Current pricing](https://jsonscraper.com/services/tiktok-scraper-api?utm_source=github&utm_medium=sdk&utm_campaign=tiktok-api-node&utm_content=pricing#pricing) · [Endpoint reference](endpoints.md) · [Runnable examples](../examples) · [Postman](https://www.postman.com/evelode/workspace/evelode/collection/24862082-d886cc87-4267-4e0c-b57a-2d083add50ad)**

## Navigation

- [What you can build](#what-you-can-build)
- [Installation](#1-install)
- [License key and access](#2-get-api-access)
- [First request](#3-make-your-first-request)
- [Available methods](#available-methods)
- [Request examples](#more-request-examples)
- [Complete example catalogue](#complete-request-example-catalogue)
- [Endpoint reference](endpoints.md)
- [Configuration](#configuration)
- [Errors, pagination and caching](#errors-pagination-and-caching)
- [FAQ](#faq)
- [Development and releases](#development-and-releases)
- [Privacy](#privacy)

## What you can build

Read public profiles and videos; retrieve comments and feeds; search users/videos/music/hashtags; inspect trending/live routes; obtain no-watermark video URLs returned by the API.

This repository contains the **TikTok SDK only**. It calls the hosted jsonscraper API; you do not need to maintain browser automation, platform sessions or a scraping server.

## 1. Install

Requirements: **Node.js 20+**.

```sh
npm install github:jsonscraper/tiktok-api-node#v0.1.0
```

The GitHub installation above works independently of package registry registration. A public PyPI/npm/Packagist listing is a separate release step; this README does not claim those listings already exist.

To develop from a checkout, clone this repository and install its dependencies using the package manager for this SDK.

## 2. Get API access

The SDK source uses the **MIT license**. Hosted API usage requires a separate **TikTok API license** with its own quota and validity period.

1. Open the [TikTok product page](https://jsonscraper.com/services/tiktok-scraper-api?utm_source=github&utm_medium=sdk&utm_campaign=tiktok-api-node&utm_content=onboarding).
2. Check the current plans and follow **Get Access** to obtain your license key.
3. Save the key on your server as an environment variable:

```sh
export JSONSCRAPER_TIKTOK_LICENSE_KEY='your-license-key'
```

Current prices and limits are linked from the product page rather than copied into this README. That keeps the purchase information current. Do not commit your key or put it in browser/mobile frontend code.

## 3. Make your first request

```javascript
import {TikTok, APIError} from '@jsonscraper/tiktok';

const client = new TikTok(process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY, {timeout: 30000, retries: 1});
try {
  const response = await client.get_user_info({query: 'therock', cache_timeout: 60});
  if (response.status !== 'ok') throw new Error('The API returned an application error');
  console.log(response.tiktok);
} catch (error) {
  if (error instanceof APIError) console.error('HTTP', error.status);
  else throw error;
}
```

**[Open the runnable version](../examples/quickstart.mjs)**. The example uses a public account and a short server-side cache. You can replace the account with one relevant to your project. A licensed live request may consume quota.

The profile response follows this shape (shortened; fields can be absent or null):

```json
{
  "status": "ok",
  "tiktok": {
    "user": {
      "unique_id": "therock"
    }
  }
}
```

**[Response handling guide](responses.md)** explains the envelope, application errors and identifiers. Profile responses were verified against the live API on 2026-10-25.

## Available methods

54 named API methods are available. Start with these commonly used requests, then open the [complete method reference](endpoints.md) for every method and its parameters.

| Use case | SDK method | Query parameters |
| --- | --- | --- |
| Get user info by profile URL or nickname | `get_user_info()` | `query`, `region`, `cache_timeout` |
| Get video info by ID | `get_video_by_id()` | `video_id`, `region`, `cache_timeout` |
| Get non watermarked video url | `get_no_watermark_url()` | `video_url`, `region`, `cache_timeout` |
| Get comments list by video ID | `get_comments_by_id()` | `video_id`, `region`, `cursor`, `count`, `cache_timeout` |
| Search for video by keyword | `search_video()` | `keyword`, `cursor`, `count`, `cache_timeout`, `date_posted`, `sort_by`, `region` |
| Search for user by keyword | `search_user()` | `keyword`, `cursor`, `count`, `region`, `follower_count`, `profile_type`, `other_pref`, `cache_timeout` |
| Get user feed by profile URL or nickname | `get_user_feed()` | `query`, `max_cursor`, `count`, `region`, `with_pinned_posts`, `sort_type`, `cache_timeout` |
| Get user followers by profile URL or nickname | `get_followers()` | `query`, `count`, `min_time`, `cache_timeout` |
| Get hashtag info by URL or tag name | `get_hashtag_info()` | `query`, `region`, `cache_timeout` |
| Get music info by URL or ID | `get_music_info()` | `query`, `region`, `cache_timeout` |
| Get trending feed | `get_trending_feed()` | `region`, `pull_type`, `cache_timeout` |

Each method is documented with a [complete runnable example](../examples/README.md). The transport preserves the full response envelope, including application status, payload and optional quota metadata.

## Find the request you need

The [endpoint reference](endpoints.md) lists every named SDK method, exact API path, query parameter and purpose. The [Postman collection](https://www.postman.com/evelode/workspace/evelode/collection/24862082-d886cc87-4267-4e0c-b57a-2d083add50ad) contains current descriptions, parameter examples and endpoint groups.

Use the generic request method for newly added routes without waiting for an SDK release. Parameter names remain identical to Postman. For example, cache controls are always `cache_timeout`; platform IDs are passed as strings.

## More request examples

- [Read a video](../examples/video.mjs) — `GET /getVideoByID`.
- [Search public videos](../examples/search.mjs) — `GET /searchVideo`.
- [Read a page of user videos](../examples/feed.mjs) — `GET /getUserFeed`.

These examples make one request each. They never loop automatically through your quota. For feed pagination, inspect the returned cursor and `has_more`, then pass the cursor back to the same endpoint.

## Complete request example catalogue

Every link opens a full program with parameters, authentication, timeout, errors and output handling. **[Running the examples](../examples/README.md)** explains the commands.

<details>
<summary>Video · 6 examples</summary>

- [Get non watermarked video url](../examples/endpoints/get_no_watermark_url.mjs) — `GET /getNoWatermarkUrl`.
- [Get non watermarked video url by video ID](../examples/endpoints/get_no_watermark_url_by_id.mjs) — `GET /getNoWatermarkUrlByID`.
- [Get video info by ID](../examples/endpoints/get_video_by_id.mjs) — `GET /getVideoByID`.
- [Get video info by URL](../examples/endpoints/get_video_by_url.mjs) — `GET /getVideoByUrl`.
- [Convert short TikTok video URL to full TikTok video URL](../examples/endpoints/get_unshortened_url.mjs) — `GET /getUnshortenedUrl`.
- [Get video by playlist ID](../examples/endpoints/get_video_by_playlist_id.mjs) — `GET /getVideoByPlaylistID`.

</details>

<details>
<summary>Comments · 3 examples</summary>

- [Get comments list by video URL](../examples/endpoints/get_comments_by_url.mjs) — `GET /getCommentsByUrl`.
- [Get comments list by video ID](../examples/endpoints/get_comments_by_id.mjs) — `GET /getCommentsByID`.
- [Get comments replies](../examples/endpoints/get_comments_replies.mjs) — `GET /getCommentsReplies`.

</details>

<details>
<summary>Search · 9 examples</summary>

- [Search for user by keyword](../examples/endpoints/search_user.mjs) — `GET /searchUser`.
- [Search for video by keyword](../examples/endpoints/search_video.mjs) — `GET /searchVideo`.
- [Search for music by keyword](../examples/endpoints/search_music.mjs) — `GET /searchMusic`.
- [Search for live by keyword](../examples/endpoints/search_live.mjs) — `GET /searchLive`.
- [Search for hashtag by keyword](../examples/endpoints/search_hashtag.mjs) — `GET /searchHashtag`.
- [Search for location by keyword](../examples/endpoints/search_location.mjs) — `GET /searchLocation`.
- [Top search by text query](../examples/endpoints/search_top.mjs) — `GET /searchTop`.
- [Search insights by text query](../examples/endpoints/search_insights.mjs) — `GET /searchInsights`.
- [Search comment suggested users](../examples/endpoints/search_comment_suggested_users.mjs) — `GET /searchCommentSuggestedUsers`.

</details>

<details>
<summary>Users And Feeds · 16 examples</summary>

- [Get user info by profile URL or nickname](../examples/endpoints/get_user_info.mjs) — `GET /getUserInfo`.
- [Get user info by profile ID](../examples/endpoints/get_user_info_by_id.mjs) — `GET /getUserInfoByID`.
- [Get user info by username](../examples/endpoints/get_basic_user_info.mjs) — `GET /getBasicUserInfo`.
- [Get user feed by profile URL or nickname](../examples/endpoints/get_user_feed.mjs) — `GET /getUserFeed`.
- [Get user feed by profile ID](../examples/endpoints/get_user_feed_by_id.mjs) — `GET /getUserFeedByID`.
- [Get user ID by profile URL or nickname](../examples/endpoints/get_user_id.mjs) — `GET /getUserID`.
- [Get username by TikTok user ID](../examples/endpoints/get_username_by_id.mjs) — `GET /getUsernameByID`.
- [Get Twitter username by profile URL, nickname or TikTok user ID](../examples/endpoints/get_twitter_username.mjs) — `GET /getTwitterUsername`.
- [Get Instagram username by profile URL, nickname or TikTok user ID](../examples/endpoints/get_instagram_username.mjs) — `GET /getInstagramUsername`.
- [Get user followers by profile URL or nickname](../examples/endpoints/get_followers.mjs) — `GET /getFollowers`.
- [Get user followers by profile ID](../examples/endpoints/get_followers_by_id.mjs) — `GET /getFollowersByID`.
- [Get user following by profile URL or nickname](../examples/endpoints/get_following.mjs) — `GET /getFollowing`.
- [Get user following by profile ID](../examples/endpoints/get_following_by_id.mjs) — `GET /getFollowingByID`.
- [Get user stories](../examples/endpoints/get_user_stories.mjs) — `GET /getUserStories`.
- [Get user playlists](../examples/endpoints/get_user_playlists.mjs) — `GET /getUserPlaylists`.
- [Get user playlist by ID](../examples/endpoints/get_user_playlist_by_id.mjs) — `GET /getUserPlaylistByID`.

</details>

<details>
<summary>Other Endpoints · 11 examples</summary>

- [Get YouTube channel info by profile URL, nickname or TikTok user ID](../examples/endpoints/get_youtube_channel.mjs) — `GET /getYoutubeChannel`.
- [Get location info by ID](../examples/endpoints/get_location_info_by_id.mjs) — `GET /getLocationInfoByID`.
- [Get videos by location ID](../examples/endpoints/get_location_feed_by_id.mjs) — `GET /getLocationFeedByID`.
- [Get trending categories list](../examples/endpoints/get_trending_categories_list.mjs) — `GET /getTrendingCategoriesList`.
- [Get trending feed](../examples/endpoints/get_trending_feed.mjs) — `GET /getTrendingFeed`.
- [Get effect information by IDs](../examples/endpoints/get_stickers_by_id.mjs) — `GET /getStickersByID`.
- [Get effect information by ID](../examples/endpoints/get_sticker_by_id.mjs) — `GET /getStickerByID`.
- [Get videos by effect ID](../examples/endpoints/get_sticker_feed_by_id.mjs) — `GET /getStickerFeedByID`.
- [Get story info by ID](../examples/endpoints/get_story_info_by_id.mjs) — `GET /getStoryInfoByID`.
- [Get available ranking list](../examples/endpoints/get_available_ranking_list.mjs) — `GET /getAvailableRankingList`.
- [Get ranking info](../examples/endpoints/get_ranking_info.mjs) — `GET /getRankingInfo`.

</details>

<details>
<summary>Live · 3 examples</summary>

- [Get live event info by ID](../examples/endpoints/get_live_event_info_by_id.mjs) — `GET /getLiveEventInfoByID`.
- [Get live info](../examples/endpoints/get_live_info.mjs) — `GET /getLiveInfo`.
- [Get live feed](../examples/endpoints/get_live_feed.mjs) — `GET /getLiveFeed`.

</details>

<details>
<summary>Hashtags · 3 examples</summary>

- [Get hashtag info by URL or tag name](../examples/endpoints/get_hashtag_info.mjs) — `GET /getHashtagInfo`.
- [Get hashtag feed by URL or tag name](../examples/endpoints/get_hashtag_feed.mjs) — `GET /getHashtagFeed`.
- [Get hashtag feed by ID](../examples/endpoints/get_hashtag_feed_by_id.mjs) — `GET /getHashtagFeedByID`.

</details>

<details>
<summary>Music · 3 examples</summary>

- [Get music info by URL or ID](../examples/endpoints/get_music_info.mjs) — `GET /getMusicInfo`.
- [Get music feed by URL or ID](../examples/endpoints/get_music_feed.mjs) — `GET /getMusicFeed`.
- [Get music charts](../examples/endpoints/get_music_charts.mjs) — `GET /getMusicCharts`.

</details>

## Configuration

Default API base URL: **`https://tiktok.evelode.com`**. Configure `baseUrl`, `timeout` (milliseconds), `retries`, `cacheTimeout`. HTTPS is required except for explicit localhost test servers. Default timeout is 30 seconds.

Retries default to **0**; opt in to 0–5 retries for HTTP 429, 502, 503 and 504. Numeric `Retry-After` is respected up to 60 seconds; otherwise bounded exponential backoff applies. HTTP-date values use backoff. Retries may consume API quota, and total elapsed time can exceed one request timeout.

The configured license key is sent using the API's `license_key` query parameter. It overrides per-request attempts to supply a different key. Redirects are disabled, TLS verification stays enabled, and transport errors do not include request URLs. Keep credential-bearing URLs out of your application and reverse-proxy logs.

## Errors, pagination and caching

HTTP exceptions expose the status code and retry information. Transport failures have a credential-safe message. HTTP 200 alone is not application success: inspect `status` and any quota/product error fields. HTTP 403 can indicate an access restriction; 429 means you should wait or check the plan's limits.

Pagination is endpoint-specific. Pass a returned cursor unchanged to the next request, stop when `has_more` is false/0, and stop if a cursor repeats. Always set your own page/request budget. The SDK does not invent cursor fields or automatically spend your quota.

`cache_timeout=60` enables API-side caching for 60 seconds; `0` disables it. See the current product terms for quota treatment. The SDK does not cache responses locally.

Large IDs must remain strings in your application. Python preserves integer precision; JavaScript converts unsafe JSON integers to strings; PHP uses `JSON_BIGINT_AS_STRING`; Go provides `Decode()` with `json.Number`; Java returns response bytes for your chosen JSON library; C# exposes bytes and `JsonDocument`.

## FAQ

**Is this the official platform API?** This is the jsonscraper service SDK. jsonscraper is independent and is not affiliated with or endorsed by TikTok.

**Is the library free?** The SDK source is MIT-licensed. The hosted API requires a separate paid license. See [current plans and access](https://jsonscraper.com/services/tiktok-scraper-api?utm_source=github&utm_medium=sdk&utm_campaign=tiktok-api-node&utm_content=faq).

**Does it work without a key?** A valid product license key is required for normal API requests. Never use a README example as a source of credentials.

**Can I use it in an existing application?** Yes. Install the package, configure the client, and call it from your server-side service. It does not require a web framework.

**Where do I ask for help?** For reproducible SDK bugs, open a [GitHub issue](https://github.com/jsonscraper/tiktok-api-node/issues) with sanitized details. For plans, license questions and service support, use [jsonscraper contacts](https://jsonscraper.com/contacts?utm_source=github&utm_medium=sdk&utm_campaign=tiktok-api-node&utm_content=support).

## Development and releases

```sh
python3 tests/contract.py
```

Tests run offline against a local/mock HTTP server and require no API key. A GitHub Actions template is included in `docs/github-actions.yml`; enabling it later requires `workflow` permission. No automatic workflow is enabled by this release.

See [CHANGELOG.md](../CHANGELOG.md) for release notes. Package registry publishing is tracked separately from the public GitHub source release.

## Privacy

The SDK includes no installation, API usage or conversion telemetry. It sends requests only to the configured API endpoint. README website links carry UTM campaign parameters so jsonscraper can attribute website visits and actions to this repository; website tracking respects Do Not Track and Global Privacy Control. Purchase clicks are measured as intent, not confirmed payment.
