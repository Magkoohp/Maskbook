import urlcat from 'urlcat'
import type { TwitterBaseAPI } from '../../entry-types.js'
import { staleCached } from '../../helpers/fetchCached.js'
import { fetchJSON } from '../../helpers/fetchJSON.js'

const TWITTER_IDENTITY_URL = 'https://mr8asf7i4h.execute-api.us-east-1.amazonaws.com/prod/twitter-identity'

function createUser(response: TwitterBaseAPI.IdentifyResponse): TwitterBaseAPI.User {
    return {
        has_nft_avatar: false,
        verified: response.verified,
        userId: '',
        nickname: response.name,
        screenName: response.screen_name,
        avatarURL: response.profile_image_url_https,
        bio: response.description,
        location: response.location,
        homepage: response.entities.url.urls[0]?.expanded_url,
    }
}
export async function getUserViaTwitterIdentity(screenName: string): Promise<TwitterBaseAPI.User | null> {
    const identity = await fetchJSON<TwitterBaseAPI.IdentifyResponse>(
        urlcat(TWITTER_IDENTITY_URL, {
            screenName,
        }),
        undefined,
    )
    return createUser(identity)
}

export async function staleUserViaIdentity(screenName: string): Promise<TwitterBaseAPI.User | null> {
    const response = await staleCached(
        new URL(
            urlcat(TWITTER_IDENTITY_URL, {
                screenName,
            }),
        ),
    )
    if (!response?.ok) return null

    const identity: TwitterBaseAPI.IdentifyResponse = await response.json()
    return createUser(identity)
}
