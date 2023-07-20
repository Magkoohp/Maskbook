import { EMPTY_LIST } from '@masknet/shared-base'
import type { Transaction } from '@masknet/web3-shared-base'
import type { ChainId, SchemaType } from '@masknet/web3-shared-evm'
import urlcat from 'urlcat'
import { fetchJSON } from '../entry-helpers.js'
import { CHAINBASE_API_URL } from './constants.js'
import type { Tx } from './types.js'

export async function fetchFromChainbase<T>(pathname: string) {
    const data = await fetchJSON<
        | {
              code: 0 | Omit<number, 0>
              message: 'ok' | Omit<string, 'ok'>
              data: T
          }
        | undefined
    >(urlcat(CHAINBASE_API_URL, pathname), undefined, {
        enableCache: true,
        enableSquash: true,
    })
    return data?.code === 0 ? data.data : undefined
}

export function toTransaction(chainId: ChainId, tx: Tx): Transaction<ChainId, SchemaType> {
    return {
        id: tx.transaction_hash,
        chainId,
        status: tx.status,
        timestamp: new Date(tx.block_timestamp).getTime(),
        from: tx.from_address,
        to: tx.to_address,
        assets: EMPTY_LIST,
        blockNumber: Number.parseInt(tx.block_number, 10),
        nonce: tx.nonce,
    }
}
