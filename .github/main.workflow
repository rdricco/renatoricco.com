workflow "Gatsby to GitHub Pages" {
  on = "push"
  resolves = ["Publish"]
}

action "On rebass_past" {
  uses = "actions/bin/filter@master"
  args = "branch rebass_past"
  secrets = ["ACCESS_TOKEN", "GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN", "PERSONAL_ACCESS_TOKEN"]
}

action "Publish" {
  uses = "enriikke/gatsby-gh-pages-action@master"
  secrets = ["ACCESS_TOKEN"]
  needs = ["On rebass_past"]
}
