import { describe, expect, it } from 'vitest'
import REDPACKET_ABI from '@masknet/web3-contracts/abis/HappyRedPacketV4.json'
import { decodeEvents } from '../../src/helpers/decodeEvents.js'
import type { AbiItem } from 'web3-utils'
import { type Log } from 'web3-core'

describe('decodeEvents', () => {
    it('should return expected result for RedPacket events log', () => {
        const log: Log = {
            address: '0xabbe1101fd8fa5847c452a6d70c8655532b03c33',
            blockHash: '0x2eafee172180fe1510fcf0bfe3ab5c03008c6d1d24f49455bc4660c2a3fa3672',
            blockNumber: 0x109e837,
            data: '0x00000000000000000000000000000000000000000000000000005af3107a400079db2b3db406f16477c48ac4dedc681995686bd3976bae159e9b3337429c4c6c00000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000180000000000000000000000000790116d0685eb197b886dacad9c247f785987a4a000000000000000000000000000000000000000000000000000000006480182f000000000000000000000000f4d2888d29d722226fafa5d9b24f9164c092421e000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000015180000000000000000000000000000000000000000000000000000000000000000c556e6b6e6f776e205573657200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            logIndex: 0xac,
            removed: false,
            topics: ['0x86af556fd7cfab9462285ad44f2d5913527c539ff549f74731ca9997ca534018'],
            transactionHash: '0x9a9e084717d1f63be9d552ffe4f1edbcad2ade10c064b72c1872b67856dfd278',
            transactionIndex: 0x58,
        }
        const eventParams = decodeEvents(REDPACKET_ABI as AbiItem[], [log]) as unknown as {
            CreationSuccess: {
                returnValues: {
                    id: string
                    creation_time: string
                }
            }
        }
        expect(eventParams).toMatchInlineSnapshot(`
          {
            "CreationSuccess": {
              "address": "0xabbe1101fd8fa5847c452a6d70c8655532b03c33",
              "blockHash": "0x2eafee172180fe1510fcf0bfe3ab5c03008c6d1d24f49455bc4660c2a3fa3672",
              "blockNumber": 17426487,
              "data": "0x00000000000000000000000000000000000000000000000000005af3107a400079db2b3db406f16477c48ac4dedc681995686bd3976bae159e9b3337429c4c6c00000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000180000000000000000000000000790116d0685eb197b886dacad9c247f785987a4a000000000000000000000000000000000000000000000000000000006480182f000000000000000000000000f4d2888d29d722226fafa5d9b24f9164c092421e000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000015180000000000000000000000000000000000000000000000000000000000000000c556e6b6e6f776e205573657200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
              "event": "CreationSuccess",
              "logIndex": 172,
              "raw": {
                "data": "0x00000000000000000000000000000000000000000000000000005af3107a400079db2b3db406f16477c48ac4dedc681995686bd3976bae159e9b3337429c4c6c00000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000180000000000000000000000000790116d0685eb197b886dacad9c247f785987a4a000000000000000000000000000000000000000000000000000000006480182f000000000000000000000000f4d2888d29d722226fafa5d9b24f9164c092421e000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000015180000000000000000000000000000000000000000000000000000000000000000c556e6b6e6f776e205573657200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                "topics": [
                  "0x86af556fd7cfab9462285ad44f2d5913527c539ff549f74731ca9997ca534018",
                ],
              },
              "removed": false,
              "returnValues": Result {
                "0": "100000000000000",
                "1": "0x79db2b3db406f16477c48ac4dedc681995686bd3976bae159e9b3337429c4c6c",
                "2": "Unknown User",
                "3": "",
                "4": "0x790116d0685eB197B886DAcAD9C247f785987A4a",
                "5": "1686116399",
                "6": "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
                "7": "2",
                "8": true,
                "9": "86400",
                "__length__": 10,
                "creation_time": "1686116399",
                "creator": "0x790116d0685eB197B886DAcAD9C247f785987A4a",
                "duration": "86400",
                "id": "0x79db2b3db406f16477c48ac4dedc681995686bd3976bae159e9b3337429c4c6c",
                "ifrandom": true,
                "message": "",
                "name": "Unknown User",
                "number": "2",
                "token_address": "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
                "total": "100000000000000",
              },
              "signature": "0x86af556fd7cfab9462285ad44f2d5913527c539ff549f74731ca9997ca534018",
              "topics": [
                "0x86af556fd7cfab9462285ad44f2d5913527c539ff549f74731ca9997ca534018",
              ],
              "transactionHash": "0x9a9e084717d1f63be9d552ffe4f1edbcad2ade10c064b72c1872b67856dfd278",
              "transactionIndex": 88,
            },
          }
        `)
    })
})