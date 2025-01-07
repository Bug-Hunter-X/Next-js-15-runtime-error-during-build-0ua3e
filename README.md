# Next.js 15 Runtime Error During Build
This repository demonstrates a runtime error that occurs during the Next.js 15 build process. The error is caused by a division by zero in the `pages/about.js` file. This error can be hard to debug because it does not halt the build process; instead it manifests as an error in the browser console during runtime.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the error in your browser's console.