workflow "Build and Deploy Pages" {
  on = "push"
  resolves = [
    "Install",
    "Build",
    "Deploy Pages",
    "cache",
  ]
}

action "Install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "install"
  needs = ["cache"]

}

action "Build" {
  uses = "guahanweb/actions/node-app@master"
  env = {
    PKG_MANAGER = "yarn"
  }
  args = "run build"
  secrets = ["GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN"]
  needs = ["Install"]
}

action "Deploy Pages" {
  uses = "guahanweb/actions/node-app@master"
  secrets = [
    "GITHUB_TOKEN",
    "GRAPHCMS_ENDPOINT",
    "GRAPHCMS_TOKEN",
  ]
  args = "gh-pages"
  needs = ["Build"]
  env = {
    BUILD_DIR = "public"
  }
  needs = ["Build"]
}

action "cache" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "cache clean --force"
}
