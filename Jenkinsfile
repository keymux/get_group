pipeline {
  agent any

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
