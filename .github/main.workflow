workflow "Push to Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Cache" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "cache clean --force"
}

action "Npm install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Cache"]
  args = "install"
}

action "Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "run build"
  needs = ["Npm install"]
  secrets = ["GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN"]
}

action "Publish" {
  needs = ["Build"]
  uses = "mythmon/actions-gh-pages@master"
  secrets = [
    "ACCESS_TOKEN",
    "PERSONAL_ACCESS_TOKEN",
  ]
  env = {
    SOURCE_DIRECTORY = "public"
  }
}
