[![EAS Build](https://github.com/goseind/kryptolearn/actions/workflows/eas-build.yml/badge.svg)](https://github.com/goseind/kryptolearn/actions/workflows/eas-build.yml) [![EAS Submit](https://github.com/goseind/kryptolearn/actions/workflows/eas-submit.yml/badge.svg)](https://github.com/goseind/kryptolearn/actions/workflows/eas-submit.yml) [![pages-build-deployment](https://github.com/goseind/kryptolearn/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/goseind/kryptolearn/actions/workflows/pages/pages-build-deployment) [![Tests](https://github.com/goseind/kryptolearn/actions/workflows/jest-test.yml/badge.svg)](https://github.com/goseind/kryptolearn/actions/workflows/jest-test.yml) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://github.com/jestjs/jest)

# Krypto Learn

<img src="media/playstorelogo.png" alt="playstorelogo" width="60"/> <a href='https://play.google.com/store/apps/details?id=com.dom325345.kryptolearn&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="150" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>

*Learn and understand basic concepts of cryptography with Krypto Learn!*

## About Krypto Learn

Krypto Learn is a React Native app, currently only available in German and built for Android, that teaches the basic concepts of cryptography and allows the user to run the algorithms with their number problems and shows the steps to solve them.

## App Development/ Roadmap

The app is built using React Native on Expo, below are the tasks ahead.

- [x] Implement Alogorithms
  - [x] Euclidean algorithm
  - [x] Extended Euclidean algorithm
  - [x] Chinese remainder theorem
  - [ ] Euler's totient function
  - [ ] Fermat Test
  - [ ] Miller-Rabin Test
  - [ ] Diffie-Hellman
  - [ ] RSA
  - [ ] ElGamal
- [ ] Env and build
  - [ ] Expo GitHub Actions Trigger
  - [ ] Configure devcontainer
    - [x] add devcontainer config
    - [ ] run automated `eas login`
- [ ] UI Design/Improvements
    - [ ] App Icon Design
    - [ ] Common colors
    - [ ] Common buttons
- [ ] Additonal Content (Texts, etc.)
- [ ] Release: https://docs.expo.dev/submit/android/
  - [x] Google Play Store Dev Account
  - [x] Google Cloud Project and SVC Account incl. JSON secret: https://github.com/expo/fyi/blob/main/creating-google-service-account.md
  - [x] Google internal test release with manual build APK: https://github.com/expo/fyi/blob/main/first-android-submission.md (pending account verificaion)
  - [x] Configure automatic eas submit and publish to play store
  - [ ] Rlease app to Play Store

Other stuff:
- renew google svc cred
- implement robot user in config
