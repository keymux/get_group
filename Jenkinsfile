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
        bash '''#!/bin/bash
                echo "hello world" && yarn test
        '''
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}
