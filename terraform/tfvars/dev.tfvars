vpc_id              = "vpc-XXXXXXXXX"
Instance_type       = "t2.medium"
minsize             = 1
maxsize             = 2
public_subnets     = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"] # Service Subnet
elb_public_subnets = ["subnet-XXXXXXXXXX", "subnet-XXXXXXXXX"] # ELB Subnet
tier = "WebServer"
solution_stack_name= "64bit Amazon Linux 2023 v4.0.0 running Docker"