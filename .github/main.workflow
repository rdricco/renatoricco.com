workflow "Build and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install --prod"
}

action "Build" {
  needs = ["Install"]
  uses = "borales/actions-yarn@master"
  args = "build"
}

action "Publish" {
  needs = ["Build"]
  uses = "mythmon/actions-gh-pages@master"
  secrets = [
    "PERSONAL_ACCESS_TOKEN",
    "GRAPHCMS_ENDPOINT",
    "GRAPHCMS_TOKEN",
  ]
}
