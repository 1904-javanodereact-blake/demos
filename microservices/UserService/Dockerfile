# Pull from an image that already has java 8
FROM openjdk:8

RUN mv /etc/alternatives/java /etc/alternatives/java8
RUN apt-get update -y && apt-get install maven -y

# Restore Java 8
RUN mv -f /etc/alternatives/java8 /etc/alternatives/java
RUN ls -l /usr/bin/java && java -version

EXPOSE 8080

COPY ./ .

RUN "mvn clean package"

CMD "java -jar target/UserService.jar"
