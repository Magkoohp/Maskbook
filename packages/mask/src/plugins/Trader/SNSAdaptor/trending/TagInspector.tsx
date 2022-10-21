import { useCallback } from 'react'
import type { DataProvider } from '@masknet/public-api'
import { ChainId } from '@masknet/web3-shared-evm'
import { NetworkPluginID } from '@masknet/shared-base'
import { ChainContextProvider, NetworkContextProvider } from '@masknet/web3-hooks-base'
import { TrendingPopper } from './TrendingPopper.js'
import { TagType } from '../../types/index.js'
import { TrendingView } from './TrendingView.js'
import { useAvailableDataProviders } from '../../trending/useAvailableDataProviders.js'

export interface TagInspectorProps {}

export function TagInspector(props: TagInspectorProps) {
    // build availability cache in the background page
    useAvailableDataProviders(TagType.CASH, 'BTC')

    const createTrendingView = useCallback(
        (name: string, type: TagType, dataProviders: DataProvider[], reposition?: () => void) => {
            return <TrendingView name={name} tagType={type} dataProviders={dataProviders} onUpdate={reposition} />
        },
        [],
    )
    return (
        <NetworkContextProvider value={NetworkPluginID.PLUGIN_EVM}>
            <ChainContextProvider value={{ chainId: ChainId.Mainnet }}>
                <TrendingPopper>{createTrendingView}</TrendingPopper>
            </ChainContextProvider>
        </NetworkContextProvider>
    )
}
