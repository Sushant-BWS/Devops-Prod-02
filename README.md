# 🚀 DevOps CI/CD Pipeline with Monitoring (Jenkins + AWS + Prometheus + Grafana)

## 📌 Project Overview

This project demonstrates a complete **DevOps pipeline** where a Node.js application is automatically deployed on AWS EC2 using Jenkins, and monitored using Prometheus and Grafana.

---

## 🧱 Architecture

```
GitHub → Jenkins → AWS EC2 → Node.js App
                        ↓
                 Prometheus (Metrics)
                        ↓
                 Grafana (Dashboard)
```

---

## 🛠️ Tech Stack

* **Cloud:** AWS EC2
* **CI/CD:** Jenkins
* **Backend:** Node.js
* **Process Manager:** PM2
* **Monitoring:** Prometheus
* **Visualization:** Grafana

---

## ⚙️ Features

* ✅ Automated deployment using Jenkins (CI/CD)
* ✅ Real-time monitoring using Prometheus
* ✅ Interactive dashboards using Grafana
* ✅ System metrics (CPU, RAM, Disk, Network)
* ✅ Application metrics via `/metrics` endpoint

---

## 🚀 Setup Steps

### 1️⃣ Launch EC2 Instance

* Ubuntu instance on AWS
* Open ports: `22, 8080, 3000, 4000, 9090, 9100`

---

### 2️⃣ Install Jenkins

```bash
sudo apt update
sudo apt install openjdk-17-jdk -y
sudo apt install jenkins -y
```

Access:

```
http://<EC2-IP>:8080
```

---

### 3️⃣ Deploy Node.js App

```bash
npm install
pm2 start app.js
```

App runs on:

```
http://<EC2-IP>:4000
```

---

### 4️⃣ Setup Jenkins CI/CD

* Connect GitHub repo
* Add build step:

```bash
npm install
pm2 restart app.js
```

---

### 5️⃣ Install Prometheus

```bash
wget https://github.com/prometheus/prometheus/releases/latest/download/prometheus-*.tar.gz
tar -xvf prometheus-*.tar.gz
cd prometheus-*
./prometheus --config.file=prometheus.yml
```

Access:

```
http://<EC2-IP>:9090
```

---

### 6️⃣ Install Node Exporter

```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.8.1/node_exporter-1.8.1.linux-amd64.tar.gz
tar -xvf node_exporter-*.tar.gz
cd node_exporter-*
./node_exporter
```

Access:

```
http://<EC2-IP>:9100/metrics
```

---

### 7️⃣ Install Grafana

```bash
wget https://dl.grafana.com/oss/release/grafana_10.4.2_amd64.deb
sudo dpkg -i grafana_10.4.2_amd64.deb
sudo systemctl start grafana-server
```

Access:

```
http://<EC2-IP>:3000
```

---

## 📊 Grafana Dashboard Setup

1. Add Prometheus as Data Source:

```
http://localhost:9090
```

2. Import Dashboard:

* ID: `1860` (Node Exporter Full)

3. Select:

* Job → `node-exporter`
* Instance → `localhost:9100`

---

## 📈 Sample Metrics

* CPU Usage
* Memory Usage
* Disk Usage
* Network Traffic

---

## 🧠 Learning Outcomes

* CI/CD pipeline implementation
* Cloud deployment on AWS
* Monitoring using Prometheus
* Visualization using Grafana
* Debugging real-world DevOps issues

---

## 🔥 Future Enhancements

* Dockerize the application
* Kubernetes deployment
* Alertmanager (Email/Slack alerts)
* Terraform for infrastructure automation

---

## 🙌 Author

**Sushant Mishra**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share 🚀
