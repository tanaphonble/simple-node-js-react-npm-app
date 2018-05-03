pipeline {
    agent none

    environment { 
        CI = 'true'
    }
    stages {
        stage('A') {
            steps {
                sh 'echo "state A"'
            }
        }
        stage('B') {
            steps {
                sh 'echo "state B"'
            }
        }
        stage('C') { 
            steps {
                sh 'echo "state C"'
            }
        }
    }
}
