workflow "Build and Deploy Pages" {
  on = "push"
  resolves = ["Build", "Deploy Pages"]
}

action "Build" {
  uses = "guahanweb/actions/node-app@master"
  env = {
    PKG_MANAGER = "yarn"
  }
  args = "run build"
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
