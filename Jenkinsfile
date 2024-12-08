pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'saif1920/nodejs-shopping-cart-web-app:latest'
        KUBECONFIG = '/var/jenkins_home/.kube/config'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SaifeddineBENZAIED/TP_K8s_devops.git'
            }
        }

        stage('Test Docker Access') {
            steps {
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: 'https://registry.hub.docker.com']) {
                    sh 'docker tag saif1920/nodejs-shopping-cart-web-app:latest registry.hub.docker.com/saif1920/nodejs-shopping-cart-web-app:latest'
                    sh 'docker push registry.hub.docker.com/saif1920/nodejs-shopping-cart-web-app:latest'
                }
            }
        }

        stage('Test Kubernetes Access') {
            steps {
                sh 'kubectl get nodes --kubeconfig=$KUBECONFIG'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Appliquer les manifests Kubernetes
                    sh "kubectl apply -f deployment.yaml --kubeconfig=${KUBECONFIG}"
                    sh "kubectl apply -f service.yaml --kubeconfig=${KUBECONFIG}"
                }
            }
        }

        stage('Monitor Pods') {
            steps {
                script {
                    // Vérifier les pods déployés
                    sh "kubectl get pods --kubeconfig=${KUBECONFIG}"
                }
            }
        }

        stage('Verify Helm Installation') {
            steps {
                sh 'helm version'
            }
        }

        stage('Configure Monitoring with Prometheus') {
            steps {
                script {
                    sh 'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts'
                    sh 'helm repo update'
                    sh 'helm install prometheus prometheus-community/prometheus'
                }
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                script {
                    def ansibleImage = 'ansible/ansible'
                    // Check if the image exists locally
                    if (!docker.image(ansibleImage).exists()) {
                        echo "Ansible image not found locally. Pulling ${ansibleImage} from Docker Hub."
                        sh "docker pull ${ansibleImage}"
                    } else {
                        echo "Ansible image ${ansibleImage} already exists locally."
                    }
                    // Use the image to run the Ansible tasks
                    docker.image(ansibleImage).inside {
                        sh '''
                        ansible --version
                        ansible-playbook -i inventory.yml playbook.yml
                        '''
                    }
                }
            }
        }
        stage('Monitor Application with Prometheus') {
            steps {
                echo 'Monitoring application with Prometheus...'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/logs/*.log', allowEmptyArchive: true
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
