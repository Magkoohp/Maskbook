import { memo, useCallback } from 'react'
import { EMPTY_LIST, type EnhanceableSite } from '@masknet/shared-base'
import { PersonaContext } from '@masknet/shared'
import { Telemetry } from '@masknet/web3-telemetry'
import { EventType } from '@masknet/web3-telemetry/types'
import { requestPermissionFromExtensionPage, useMaskSharedTrans } from '../../../shared-ui/index.js'
import { ActionModal, type ActionModalBaseProps } from '../../components/index.js'
import { ConnectSocialAccounts } from '../../components/ConnectSocialAccounts/index.js'
import { useSupportSocialNetworks } from '../../hooks/index.js'
import Services from '#services'
import { EventMap } from '../../../shared/definitions/event.js'

export const ConnectSocialAccountModal = memo<ActionModalBaseProps>(function ConnectSocialAccountModal(props) {
    const t = useMaskSharedTrans()
    const { data: definedSocialNetworks = EMPTY_LIST } = useSupportSocialNetworks()

    const { currentPersona } = PersonaContext.useContainer()

    const handleConnect = useCallback(
        async (networkIdentifier: EnhanceableSite) => {
            if (!currentPersona) return
            if (!(await requestPermissionFromExtensionPage(networkIdentifier))) return
            await Services.SiteAdaptor.connectSite(currentPersona.identifier, networkIdentifier, undefined)

            const eventID = EventMap[networkIdentifier]
            if (eventID) Telemetry.captureEvent(EventType.Access, eventID)
        },
        [currentPersona],
    )

    if (!definedSocialNetworks.length) return null

    return (
        <ActionModal header={t.popups_connect_social_account()} keepMounted {...props}>
            <ConnectSocialAccounts networks={definedSocialNetworks} onConnect={handleConnect} />
        </ActionModal>
    )
})
