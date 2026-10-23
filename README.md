# iOS dictation duplicates text in a controlled TextInput (new architecture)

On iOS 16+ with the new architecture, ending dictation with the keyboard mic key in a single-line controlled `TextInput` inserts the dictated text twice. Fabric's `RCTTextInputComponentView` only treats input as dictation when `primaryLanguage == "dictation"`, which iOS 16+ no longer reports; the old architecture also checks `dictationRecognizing` ([#37188](https://github.com/react/react-native/pull/37188)).

## Steps to reproduce

1. Run `ReproducerApp` on a physical iPhone or iPad (the simulator has no reliable dictation).
2. Tap the **Controlled** field, tap the keyboard mic key and say a sentence.
3. Tap the mic key again to end dictation.

**Expected:** the sentence appears once. **Actual:** it appears twice. The uncontrolled field below is not affected.

## Results (iPadOS 26, 5 attempts each)

| React Native 0.88.0, new architecture | Controlled | Uncontrolled |
| --- | --- | --- |
| Stock | 5/5 duplicated | 0/5 |
| With [fix.diff](fix.diff) | 0/5 | - |

To try the fix, apply `fix.diff` to `node_modules/react-native` (drop the `packages/react-native/` prefix) and run `RCT_USE_PREBUILT_RNCORE=0 pod install`, otherwise the prebuilt core ignores the patch.
