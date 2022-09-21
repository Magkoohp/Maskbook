import { CollectibleCard } from '../CollectibleCard.js'
import { ActivitiesList } from '../../Shared/ActivitiesList.js'
import type { AsyncStateRetry } from 'react-use/lib/useAsyncRetry.js'
import type { NonFungibleTokenEvent, Pageable } from '@masknet/web3-shared-base'
import type { Web3Helper } from '@masknet/plugin-infra/web3'

export interface ActivityTabProps {
    events: AsyncStateRetry<Pageable<NonFungibleTokenEvent<Web3Helper.ChainIdAll, Web3Helper.SchemaTypeAll>>>
}

export function ActivityTab(props: ActivityTabProps) {
    return (
        <CollectibleCard>
            <ActivitiesList events={props.events} />
        </CollectibleCard>
    )
}