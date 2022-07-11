module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "foodmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-foodmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8020",
                    "protocol": "tcp",
                    "hostPort": "8020"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "personmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-personmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8021",
                    "protocol": "tcp",
                    "hostPort": "8021"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "nutrition-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-nutrition:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8022",
                    "protocol": "tcp",
                    "hostPort": "8022"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "medicationmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-medicationmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8023",
                    "protocol": "tcp",
                    "hostPort": "8023"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "prescriptionmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-prescriptionmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8024",
                    "protocol": "tcp",
                    "hostPort": "8024"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "workout-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-workout:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8025",
                    "protocol": "tcp",
                    "hostPort": "8025"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "mealsmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-mealsmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8026",
                    "protocol": "tcp",
                    "hostPort": "8026"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "dishmanager-0930",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart33-0930-dishmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8027",
                    "protocol": "tcp",
                    "hostPort": "8027"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart33.local:27017/healthmonkstart33_0930?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart33.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart33.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart33.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart33.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart33.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart33.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart33.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart33.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart33"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart33",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "healthmonkstart33",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "healthmonkstart330",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
