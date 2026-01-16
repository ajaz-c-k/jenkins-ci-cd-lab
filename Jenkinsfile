pipeline {
    agent any
    tools {
        nodejs 'node18'
    }
    environment {
        DEPLOY_DIR = '/tmp/ci-cd-lab'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
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
        stage('Deploy') {
            when {
                expression { env.GIT_BRANCH == 'origin/main' }
            }
            steps {
                sh '''
                echo "Deploying..."
                mkdir -p $DEPLOY_DIR
                rm -rf $DEPLOY_DIR/*
                cp -r dist/* $DEPLOY_DIR/
                '''
            }
        }
    }
    post {
        success {
            echo 'Pipeline succeeded'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}

