pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/training-11/formlet.git'
            }
        }

        stage('Deploy to Server') {
            steps {
                sh '''
                # Go to real deployment directory
                cd /root/formlet

                # Pull latest code
                git pull origin main

                # Stop running containers
                docker-compose down || true

                # Build and start new containers
                docker-compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo "🚀 Formlet Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
    }
}

