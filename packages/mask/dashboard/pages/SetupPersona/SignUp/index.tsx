import { DashboardRoutes, EnhanceableSite, userGuideStatus } from '@masknet/shared-base'
import { useState, useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Services from '#services'
import { useDashboardTrans } from '../../../locales/i18n_generated.js'
import { delay } from '@masknet/kit'
import { makeStyles } from '@masknet/theme'
import { Typography, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { PrimaryButton } from '../../../components/PrimaryButton/index.js'
import { SecondaryButton } from '../../../components/SecondaryButton/index.js'
import { SetupFrameController } from '../../../components/SetupFrame/index.js'
import { TwitterAdaptor } from '../../../../shared/site-adaptors/implementations/twitter.com.js'
import { requestPermissionFromExtensionPage } from '../../../../shared-ui/index.js'

const useStyles = makeStyles()((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    second: {
        fontSize: 14,
        lineHeight: '18px',
        color: theme.palette.maskColor.second,
    },
    recovery: {
        fontSize: 14,
        lineHeight: '18px',
        color: theme.palette.maskColor.main,
        fontWeight: 700,
    },
    title: {
        fontSize: 36,
        lineHeight: 1.2,
        fontWeight: 700,
    },

    buttonGroup: {
        display: 'flex',
        columnGap: 12,
    },
}))

export const Component = memo(function SignUp() {
    const t = useDashboardTrans()
    const navigate = useNavigate()

    const { classes } = useStyles()
    const [personaName, setPersonaName] = useState('')
    const [error, setError] = useState('')

    const onNext = useCallback(async () => {
        setError('')

        const personas = await Services.Identity.queryOwnedPersonaInformation(true)
        const existing = personas.some((x) => x.nickname === personaName)

        if (existing) {
            return setError(t.create_account_persona_exists())
        }

        navigate(DashboardRoutes.SignUpPersonaMnemonic, {
            replace: true,
            state: {
                personaName,
            },
        })
    }, [personaName])

    const onSkip = useCallback(async () => {
        if (!(await requestPermissionFromExtensionPage(EnhanceableSite.Twitter))) return
        if (!userGuideStatus[EnhanceableSite.Twitter].value) userGuideStatus[EnhanceableSite.Twitter].value = '1'
        await delay(300)
        await browser.tabs.create({
            active: true,
            url: TwitterAdaptor.homepage,
        })
        window.close()
    }, [])

    const handleRecovery = useCallback(() => {
        navigate(DashboardRoutes.RecoveryPersona)
    }, [])

    return (
        <>
            <Box className={classes.header}>
                <Typography className={classes.second}>{t.create_step({ step: '1', totalSteps: '2' })}</Typography>
                <Button variant="text" className={classes.recovery} onClick={handleRecovery}>
                    {t.recovery()}
                </Button>
            </Box>
            <Typography variant="h1" className={classes.title}>
                {t.persona_create_title()}
            </Typography>
            <Typography className={classes.second} mt={2}>
                {t.persona_create_tips()}
            </Typography>
            <Typography className={classes.second} mt={3} mb={2}>
                {t.persona_name()}
            </Typography>
            <TextField
                onChange={(e) => {
                    if (error) setError('')
                    setPersonaName(e.target.value)
                }}
                autoFocus
                placeholder={t.persona_setup_persona_example()}
                required
                InputProps={{ disableUnderline: true, size: 'large' }}
                inputProps={{ maxLength: 24 }}
                error={!!error}
                helperText={error}
            />
            <SetupFrameController>
                <div className={classes.buttonGroup}>
                    <SecondaryButton width="125px" size="large" onClick={onSkip}>
                        {t.skip()}
                    </SecondaryButton>
                    <PrimaryButton
                        width="125px"
                        size="large"
                        onClick={() => onNext()}
                        disabled={!personaName.trim().length}>
                        {t.continue()}
                    </PrimaryButton>
                </div>
            </SetupFrameController>
        </>
    )
})
