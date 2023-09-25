import { memo } from 'react'
import { useMaskSharedTrans } from '../../../utils/index.js'
import { AdditionalContent } from '../AdditionalPostContent.js'
import type { ProfileIdentifier } from '@masknet/shared-base'
import { useAuthorDifferentMessage } from './authorDifferentMessage.js'

export interface DecryptPostFailedProps {
    error: Error
    /** The author in the payload */
    author: ProfileIdentifier | null
    /** The author of the encrypted post */
    postedBy: ProfileIdentifier | null
}
export const DecryptPostFailed = memo(function DecryptPostFailed(props: DecryptPostFailedProps) {
    const { author, postedBy, error } = props
    const { t } = useMaskSharedTrans()

    return (
        <AdditionalContent
            title={t('service_decryption_failed')}
            titleIcon="error"
            message={error?.message}
            headerActions={useAuthorDifferentMessage(author, postedBy, void 0)}
        />
    )
})
