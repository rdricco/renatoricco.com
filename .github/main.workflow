workflow "Push to Publish" {
  on = "push"
  resolves = ["https://github.com/guahanweb/action-nodejs-gh-pages"]
}

action "Npm install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "install"
}

action "Gatsby Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "run deploy"
  needs = ["Npm install"]
  secrets = ["GITHUB_TOKEN", "GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN"]
}

action "https://github.com/guahanweb/action-nodejs-gh-pages" {
  uses = "guahanweb/actions/node-app@master"
  needs = ["Gatsby Build"]
  secrets = ["GITHUB_TOKEN"]
}

workflow "Build and Deploy Pages" {
  on = "push"
  resolves = ["Build", "Deploy Pages"]
}

action "Build" {
  uses = "guahanweb/actions/node-app@master"
  env = {
    PKG_MANAGER = "yarn"
  }
  args = "run build:pp"
  secrets = ["GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN"]
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
}
