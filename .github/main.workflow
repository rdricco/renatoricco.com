workflow "Push to Publish" {
  on = "push"
  resolves = ["enriikke/gatsby-gh-pages-action@master"]
}

action "On rebass_past" {
  uses = "actions/bin/filter@master"
  args = "branch rebass_past"
}
action "Publish" {
  uses = "enriikke/gatsby-gh-pages-action@master"
  needs = ["Gatsby Build"]
  secrets = ["GITHUB_TOKEN", "GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN"]
}

