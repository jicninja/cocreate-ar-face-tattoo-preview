import {
  Anchor,
  Button,
  H1,
  H3,
  H6,
  Paragraph,
  Separator,
  XStack,
  YStack,
  ScrollView,
  Sticker,
  Stack,
  Logo,
  H4,
  useMedia,
  isWeb,
} from '@my/ui'
import { Play, Download } from '@tamagui/lucide-icons'
import { useLink } from 'solito/navigation'

export function HomeScreen() {
  const media = useMedia()

  const linkProps = useLink({
    href: `/ar`,
  })

  return (
    <ScrollView
      gap="$8"
      flex={1}
      contentContainerStyle={{
        paddingHorizontal: media.sm ? '$4' : '$0',
        paddingVertical: '$2',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <YStack gap="$4">
        <Sticker alignSelf="center" width={'$10'} />
        <H1 ta="center" col="$color12">
          AR Face Tattoo
        </H1>

        <YStack maxWidth={media.sm ? 350 : 600} gap={'$2'} paddingBottom={isWeb ? '$6' : '$3'}>
          <H3 paddingBottom={'$4'} col="$color10" ta="center">
            An Augmented Reality Face Tattoo Previewer prototype developed by Ignacio Castro for
            CoCreate.
          </H3>

          <Separator />

          <YStack paddingTop={'$4'} gap={'$2'} paddingBottom={'$4'} alignItems="center">
            <H6 color={'$green11Light'} letterSpacing={0} textTransform="none" fontWeight={'$1'}>
              Give it a try! Ask for a face tattoo now!
            </H6>
            <Button
              borderRadius={'$12'}
              backgroundColor={'$green11'}
              width={'$6'}
              height={'$6'}
              icon={Play}
              size={'$5'}
              padding={0}
              {...linkProps}
            />
          </YStack>

          <Paragraph>
            This application allows for real-time previews on the face through augmented reality of
            images dynamically generated by artificial intelligence via voice commands, simulating
            facial tattoos. All images displayed are generated by artificial intelligence.
          </Paragraph>

          {isWeb ? (
            <>
              <H4>Stack</H4>
              <Paragraph paddingBottom={'$4'}> Tamagui, Expo, Next</Paragraph>

              <H4>Features</H4>
              <Paragraph>
                Augmented Reality, Generative AI, Voice Recognizer, Web & Mobile
              </Paragraph>
            </>
          ) : null}

          <Anchor
            href="https://github.com/jicninja/cocreate-ar-face-tattoo-preview"
            target="_blank"
            marginTop={isWeb ? '$4' : '$2'}
            textDecorationLine={'none'}
          >
            <H4 fontSize={'$5'}>Here's the Source Code! It's Open Source ♥️</H4>
          </Anchor>

          {isWeb ? (
            <YStack flex={1}>
              <Separator />

              <Anchor
                paddingTop={'$4'}
                textAlign={'center'}
                href="/build/arfacetattoo.apk"
                target="_blank"
                textDecorationLine={'none'}
                flex={1}
                gap={'$2'}
              >
                <Download color={'$green12'} position={'relative'} top={'$1'} />

                <H4 color={'$green12'} fontSize={'$5'} paddingLeft={'$3'}>
                  Download Android Build
                </H4>
              </Anchor>
            </YStack>
          ) : null}
        </YStack>

        <Separator />

        <XStack gap={'$3'}>
          <Paragraph
            fontSize={'$1'}
            numberOfLines={1}
            allowFontScaling
            flex={1}
            margin={'$0'}
            ta="center"
          >
            Made with Love ♥️
          </Paragraph>
          <Stack justifyContent="center" flex={1}>
            <Logo />
          </Stack>
          <Paragraph
            fontSize={'$1'}
            numberOfLines={1}
            allowFontScaling
            flex={1}
            margin={'$0'}
            ta="center"
          >
            Powered by AI 🤖
          </Paragraph>
        </XStack>
        <Separator />
      </YStack>
    </ScrollView>
  )
}
