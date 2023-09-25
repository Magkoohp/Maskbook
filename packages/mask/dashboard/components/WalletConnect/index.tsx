import { memo } from 'react'
import { styled, Typography } from '@mui/material'
import { WalletQRCodeContainer } from '../WalletQRCodeContainer/index.js'
import { MaskColorVar } from '@masknet/theme'
import { useDashboardTrans } from '../../locales/index.js'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tip = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: MaskColorVar.textSecondary,
    fontSize: theme.typography.body1.fontSize,
    marginBottom: theme.spacing(5),
}))

export const WalletConnect = memo(() => {
    const t = useDashboardTrans()
    return (
        <Container>
            <Tip color="textSecondary">{t.wallets_wallet_connect_title()}</Tip>
            <WalletQRCodeContainer width={330} height={330} border={{ borderWidth: 15, borderHeight: 2 }} />
        </Container>
    )
})
