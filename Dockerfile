FROM maven:3.8.5-openjdk-17 AS build
COPY . . 
RUN mvn clean package -DskipTests

FROM maven:3.8.3-openjdk-17-slim
COPY --from=build /target/resbody-0.0.1-SNAPSHOT.jar resbody.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","resbody.jar"]