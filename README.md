# Angular Reactive Training


## Working with the repo

In order to clone the repository and run the lessons use the following commands:

```bash
git clone https://github.com/systelab/angular-reactive-training.git
cd angular-reactive-training
npm install
ng serve
```

This will bootstrap the application. Please head to htp://localhost:4200

## Wiremock

We will use WireMock server to mock a server.

Once you have [downloaded the standalone JAR](http://repo1.maven.org/maven2/com/github/tomakehurst/wiremock-standalone/2.20.0/wiremock-standalone-2.20.0.jar), run it by simply typing the command:

```bash
java -jar wiremock-standalone-2.20.0.jar --global-response-templating
```

Once started run the following commands to create some endpoint that we are going to need:

```bash
curl -X POST \
--data '{ "request": { "urlPattern": "/first\\?n=([0-9]*)", "method": "GET" }, "response": { "status": 200, "headers": { "Content-Type" : "application/json", "Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Methods" : "*", "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Encoding, Server, Transfer-Encoding", "X-Content-Type-Options" : "nosniff", "x-frame-options" : "DENY", "x-xss-protection" : "1; mode=block" }, "body": "{{request.requestLine.query.n}}", "fixedDelayMilliseconds": 2000, "transformers": ["response-template"] }}' \
http://localhost:8080/__admin/mappings/new
```


Check that everything is fine by typing:

```bash
curl http://localhost:8080/first?n=34
````
