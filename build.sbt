
val ProjectVersion: String = "0.1.0"
val ProjectScalaVersion: String = "2.12.12"

val GitHubUsername = "otter275"
val ProjectName = "math"
lazy val root = (project in file("."))
  .enablePlugins(DocusaurPlugin)
  .settings(
    organization := s"com.github.$GitHubUsername"
  , name         := ProjectName
  , scalaVersion := ProjectScalaVersion
  , version      := ProjectVersion
  , description  := "Math docs and blog"
  , homepage := Some(url(s"https://github.com/$GitHubUsername/$ProjectName"))
  , startYear := Some(2020)

  /* Docs { */
  , docusaurDir := (ThisBuild / baseDirectory).value / "website"
  , docusaurBuildDir := docusaurDir.value / "build"

  , gitHubPagesOrgName := GitHubUsername
  , gitHubPagesRepoName := ProjectName

  /* } Docs */

)
