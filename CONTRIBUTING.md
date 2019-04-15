# Contibution Guidelines
🙌 Thanks for wanting to contribute to Waffles, contributions are always welcome! 🙌

## I want to contribute to the code
- **Check out the [PR template](https://github.com/datacamp-engineering/design-system/blob/master/.github/PULL_REQUEST_TEMPLATE.md)** to see the full list of expectations that must be satisfied before merging into master. It can be helpful to open a draft PR in order to check off these items while the branch is still in progress.
- **Format commit messages** to follow the [conventional commits standard](https://www.conventionalcommits.org/en/v1.0.0-beta.3/). This is used to generate the changelogs when publishing packages.
- **Split commits by package and functionality** to make changelogs easier to interpret. If a PR covers multiple packages, fixes, refactors etc. then it should be split so a single commit only covers one of the above.

## I want to deploy some changes
- **Open a PR** and wait for all the necessary reviews
- **Merge the PR** into the master branch
- **Pull master** onto your local machine
- **Execute the publish script** by running `yarn publish-packages`

This will require an active *npm* login with sufficient permissions on the relevant packages. If you do not have this, or would just prefer somebody else to take care of the deployment, simply mention this on the PR. We're always happy to help.
