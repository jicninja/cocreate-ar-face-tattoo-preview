import {
  CustomToast,
  TamaguiProvider,
  type TamaguiProviderProps,
  ToastProvider,
  config,
  isWeb,
} from '@my/ui'
import { ToastViewport } from './ToastViewport'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {

  return (
    <TamaguiProvider config={config} defaultTheme={'dark'} {...rest}>
      <ToastProvider swipeDirection="horizontal" duration={6000} native={isWeb ? [] : ['mobile']}>
        {children}
        <CustomToast />
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}
