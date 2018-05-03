pipeline {
    agent any

    stages {
        stage('A') {
            steps {
                sh 'echo "stage A"'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "stage B"'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'ssh -i /root/.ssh/id_rsa_nopass tanaphon@node-server ./run-docker.sh'
            }
        }
    }
}
