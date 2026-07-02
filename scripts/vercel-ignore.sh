#!/bin/bash

# Vercel "Ignored Build Step" script
# Ref: https://vercel.com/docs/concepts/projects/custom-workflows/ignored-build-step

echo "VERCEL_ENV: $VERCEL_ENV"
echo "Commit Message: $VERCEL_GIT_COMMIT_MESSAGE"

# 1. Always allow Preview and Development builds
if [[ "$VERCEL_ENV" != "production" ]]; then
  echo "✅ Proceeding: This is a Preview or Development build."
  exit 1 # Exit 1 tells Vercel to PROCEED with the build
fi

# 2. In Production, only allow builds triggered by our GitHub Release Action
# We identify these by the commit message prefix added by Release Please
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"chore(main): release"* ]]; then
  echo "✅ Proceeding: This is an official Release commit."
  exit 1
fi

# 3. Otherwise, ignore the build on main
echo "🛑 Ignoring: This merge to main is NOT a final release. The GitHub Action will handle the deployment later."
exit 0 # Exit 0 tells Vercel to CANCEL the build
