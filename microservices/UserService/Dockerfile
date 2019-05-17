# Pull from an image that already has java 8
FROM openjdk:8

RUN  \
  export DEBIAN_FRONTEND=noninteractive && \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y vim wget curl git maven

EXPOSE 8080

COPY ./ .

RUN "mvn clean package"

CMD "java -jar target/UserService.jar"
