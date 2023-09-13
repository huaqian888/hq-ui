
import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger'] as const

export const ButtonSize = ['large', 'normal', 'small', 'mini'] as const

export const buttonProps = {
    type: {
        type: String,
        values: ButtonType
    },
    size: {
        type: String,
        values: ButtonSize
    }
} as const

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits