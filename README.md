# Web App with DevOps and Cloud Automation

This repository contains a **simple web application** built with Node.js, integrated with a **DevOps and Cloud pipeline** using tools like **Docker**, **Jenkins**, **Kubernetes**, **Terraform**, **Prometheus**, and **Azure**. The project demonstrates how to automate the deployment and monitoring of a web app in a cloud-native environment.

---

## 🚀 Features

- **Web Application**: A simple Node.js app with Prometheus metrics integration.
- **Docker**: Containerization of the app using a Dockerfile.
- **Jenkins Pipeline**: Automated CI/CD pipeline for building, testing, and deploying the app.
- **Kubernetes**: Deployment and scaling of the app using Kubernetes manifests.
- **Terraform**: Infrastructure as Code (IaC) for provisioning cloud resources on Azure.
- **Prometheus**: Monitoring and alerting for the application.
- **Azure Deployment**: Deployment of the app on Azure using Terraform and Docker.

---

## 🛠️ Technologies Used

- **Web App**: Node.js, Express, Prometheus
- **Containerization**: Docker
- **CI/CD**: Jenkins
- **Orchestration**: Kubernetes
- **Infrastructure as Code**: Terraform
- **Monitoring**: Prometheus, Alertmanager
- **Cloud**: Azure

---

## 📂 Repository Structure
web-app-devops-cloud-pipeline/
├── app/ # Web application code
│ ├── server.js # Node.js server code
│ ├── views/ # EJS templates (if applicable)
│ ├── public/ # Static files (CSS, JS, images)
│ └── Dockerfile # Dockerfile for containerizing the app
├── kubernetes/ # Kubernetes manifests
│ ├── deployment.yaml # Kubernetes deployment configuration
│ └── service.yaml # Kubernetes service configuration
├── terraform/ # Terraform files for Azure infrastructure
│ ├── main.tf # Main Terraform configuration
│ └── variables.tf # Terraform variables
├── jenkins/ # Jenkins pipeline scripts
│ └── Jenkinsfile # Jenkins pipeline configuration
├── monitoring/ # Prometheus and Alertmanager configurations
│ ├── prometheus.yml # Prometheus configuration
│ └── alertmanager.yml # Alertmanager configuration
├── README.md # Project documentation
└── .gitignore # Git ignore file


## 🚀 Getting Started

### Prerequisites
- Docker
- Jenkins
- Kubernetes (Minikube or a cluster)
- Terraform
- Azure CLI
- Prometheus

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SaifeddineBENZAIED/web-app-devops-cloud-pipeline.git
   cd web-app-devops-cloud-pipeline
Build the Docker Image:
   ```bash
   docker build -t web-app:latest ./app
   ```
Run the Docker Container:
   ```bash
   docker run -p 3000:3000 web-app:latest

Deploy to Kubernetes:
   Apply the Kubernetes manifests:
      ```bash
      kubectl apply -f kubernetes/deployment.yaml
      kubectl apply -f kubernetes/service.yaml

Set Up Prometheus:
   Deploy Prometheus using the provided configuration:
      ```bash
      kubectl apply -f monitoring/prometheus.yml

Run the Jenkins Pipeline:
Set up a Jenkins job and point it to the Jenkinsfile in this repository.

The pipeline will:
Build and push the Docker image.

Deploy the app to Kubernetes.

Set up monitoring with Prometheus.

Deploy the app to Azure using Terraform.

Deploy to Azure:

Run the Terraform scripts to provision Azure resources:
```bash
cd terraform
terraform init
terraform apply

🔍 Monitoring and Alerts
Prometheus: Monitors the application's metrics (e.g., HTTP requests, response times).

Alertmanager: Sends alerts based on predefined rules (e.g., high error rates, downtime).

🛠️ Jenkins Pipeline
The Jenkins pipeline automates the following steps:

Checkout: Pulls the latest code from the repository.

Build Docker Image: Builds the Docker image for the app.

Push Docker Image: Pushes the image to Docker Hub.

Deploy to Kubernetes: Applies Kubernetes manifests to deploy the app.

Set Up Monitoring: Configures Prometheus and Alertmanager.

Deploy to Azure: Uses Terraform to provision Azure resources and deploy the app.

🌐 Azure Deployment
The app is deployed to Azure using Terraform. The pipeline:

Logs in to Azure using service principal credentials.

Provisions resources (e.g., Azure Web App, Kubernetes cluster).

Deploys the Docker image to Azure.

📊 Monitoring with Prometheus
Prometheus is used to monitor the application's performance and health. Metrics include:

HTTP request counts

Response times

Error rates


✨ Let’s build something amazing together! ✨

### Key Features of the README:
1. **Clear Structure**: Organized into sections for easy navigation.
2. **Technologies Highlighted**: Lists all tools and technologies used.
3. **Step-by-Step Guide**: Provides clear instructions for setting up and running the project.
4. **Visual Appeal**: Uses emojis and markdown formatting for better readability.
5. **Recruiter-Friendly**: Demonstrates your expertise in DevOps, Cloud, and Web Development.

This README is **ready to copy and paste** into your repository. It’s designed to make your project **stand out** and showcase your skills effectively! 🚀
