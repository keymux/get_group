pipeline {
  agent {
    docker "hibes/keymux-lambda-yarn"
  }

  stages {
    stage("Build") {
      steps {
        echo 'Building'
      }
    }
    stage('Test') {
      steps {
        bash "yarn test"
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}
