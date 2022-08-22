import { useAsync } from 'react-use'
import type { AsyncState } from 'react-use/lib/useAsyncFn'

// filter out nft with image resource
export function useIsImageURL(url: string | undefined): AsyncState<boolean> {
    return useAsync(async () => {
        if (!url) return false

        if (url.startsWith('data:image')) return true

        const { pathname } = new URL(url.replace('https://r2d2.to?', ''))
        if (/\.(gif|svg|png|webp|jpg|jpeg)$/.test(pathname)) return true
        if (/\.(mp4|webm|mov|ogg|mp3|wav)$/.test(pathname)) return false
        const headers = await getHeaders(url)
        const contentType = headers?.get('Content-Type')
        const contentDisposition = headers?.get('Content-Disposition')
        return contentType?.startsWith('image/') || /\.(gif|svg|png|webp|jpg|jpeg)/.test(contentDisposition ?? '')
    }, [url])
}

async function getHeaders(url: string) {
    if (!/^https?:/.test(url)) return
    return Promise.race([
        new Promise((resolve) => setTimeout(() => resolve(''), 20000)),
        new Promise((resolve) => {
            fetch(url, { method: 'HEAD', mode: 'cors' })
                .then((response) => (response.status !== 200 ? resolve(undefined) : resolve(response.headers)))
                .catch(() => resolve(''))
        }),
    ]) as Promise<Headers | undefined>
}
