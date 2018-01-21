pipeline {
  agent {
    docker "node:6.10"
  }

  stages {
    stage("Build") {
      steps {
        echo "Hello world2!"
      }
    }
    stage("Test") {
      steps {
        yarn test

        echo "Hello world from testing!"
      }
    }
  }
}
