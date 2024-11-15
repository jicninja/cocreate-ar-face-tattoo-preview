import { WebView } from 'react-native-webview'
import { StyleSheet } from 'react-native'
import { useRef, useState } from 'react'
import { VoiceToText } from '../voiceToText'

const URL = 'https://www.arfacetattoo.online/ar'

function getInjectableJSMessage(message) {
  return `
    (function() {
      document.dispatchEvent(new MessageEvent('message', {
        data: ${JSON.stringify(message)}
      }));
    })();
  `
}

export const ARView = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const webviewRef = useRef<WebView>(null)

  const sendDataToWebView = (message: string) => {
    webviewRef.current?.injectJavaScript(getInjectableJSMessage(message))
    setIsDisabled(true)
  }

  return (
    <>
      <VoiceToText
        disabled={isDisabled}
        onVoice={(text) => sendDataToWebView(text.replaceAll(' ', '_'))}
      />
      <WebView
        allowsInlineMediaPlayback
        ref={webviewRef}
        javaScriptEnabled
        onMessage={() => {
          setIsDisabled(false)
        }}
        style={styles.webview}
        source={{ uri: URL }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
})
