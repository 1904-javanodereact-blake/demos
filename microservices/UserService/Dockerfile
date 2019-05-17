# Pull from an image that already has java 8
FROM openjdk:8

EXPOSE 8080

COPY target/UserService.jar UserService.jar

CMD ["java", "-jar", "UserService.jar"]
