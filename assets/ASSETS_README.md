Replace these placeholder assets with production-ready images before build:

- icon.png (recommended 1024x1024)
- adaptive-icon.png (foreground image 432x432, transparent background)
- splash.png (recommended 1242x2436 or 2048x2732 depending on requirement)
- notification-icon.png (64x64 or as required by expo-notifications)

Steps:

1. Create images in your design tool and export PNGs with correct sizes.
2. Put them in the `assets/` folder with the exact filenames above.
3. Re-run `npx expo prebuild` (if using EAS) or `npx expo start` to pick them up.

Note: Ensure icons do not contain alpha where not supported and test adaptive icon layers for Android.
