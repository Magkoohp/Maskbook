import { makeStyles } from '@masknet/theme'
import { ImageIcon } from '../ImageIcon/index.js'

interface StyleProps {
    size: number
    badgeIconBorderColor?: string
}

const useStyles = makeStyles<StyleProps>()((theme, props) => ({
    root: {
        position: 'relative',
        display: 'flex',
        height: props.size,
        width: props.size,
    },
    mainIcon: {
        display: 'block',
    },
    badgeIcon: {
        position: 'absolute',
        right: -6,
        bottom: -4,
        border: `1px solid ${props.badgeIconBorderColor ?? theme.palette.common.white}`,
        borderRadius: '50%',
    },
}))

interface WalletIconProps extends withClasses<'root' | 'mainIcon'> {
    size?: number
    badgeSize?: number
    mainIcon?: string
    badgeIcon?: string
    badgeIconBorderColor?: string
    iconFilterColor?: string
}

export function WalletIcon(props: WalletIconProps) {
    const { size = 24, badgeSize = 14, mainIcon, badgeIcon, badgeIconBorderColor, iconFilterColor } = props
    const { classes } = useStyles(
        {
            size: badgeSize > size ? badgeSize : size,
            badgeIconBorderColor,
        },
        { props: { classes: props.classes } },
    )

    return (
        <div
            className={classes.root}
            style={{
                height: size,
                width: size,
            }}>
            {mainIcon ? (
                <ImageIcon className={classes.mainIcon} size={size} icon={mainIcon} iconFilterColor={iconFilterColor} />
            ) : null}
            {badgeIcon ? <ImageIcon className={classes.badgeIcon} size={badgeSize} icon={badgeIcon} /> : null}
        </div>
    )
}
