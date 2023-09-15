import { forwardRef, memo, useState } from 'react'
import { IconButton, InputAdornment, useTheme, type TextFieldProps } from '@mui/material'
import { StyledInput } from '../StyledInput/index.js'
import { Icons } from '@masknet/icons'

export const PasswordField = memo(
    forwardRef<{}, TextFieldProps & { show?: boolean; onClear?: () => void }>(function PasswordField(
        { show = true, onClear, ...rest },
        ref,
    ) {
        const theme = useTheme()
        const [showPassword, setShowPassword] = useState(false)
        return (
            <StyledInput
                {...rest}
                type={showPassword ? 'text' : 'password'}
                ref={ref}
                InputProps={{
                    ...rest.InputProps,
                    endAdornment:
                        rest.error && onClear ? (
                            <InputAdornment position="end" sx={{ paddingRight: 1.5 }}>
                                <IconButton onClick={onClear} edge="end" size="small" sx={{ color: 'inherit' }}>
                                    <Icons.Close size={24} />
                                </IconButton>
                            </InputAdornment>
                        ) : (
                            <InputAdornment position="end">
                                {show ? (
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={(event) => event.preventDefault()}
                                        edge="end"
                                        size="small">
                                        {showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                                    </IconButton>
                                ) : undefined}
                            </InputAdornment>
                        ),
                }}
            />
        )
    }),
)
