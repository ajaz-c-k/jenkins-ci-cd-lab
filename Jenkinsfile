pipeline {
    agent any
    tools {
        nodejs 'node18'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        success {
            echo 'CI pipeline passed'
        }
        failure {
            echo 'CI pipeline failed'
        }
    }
}
