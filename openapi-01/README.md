# open api playground

## server folder

- I wrote the spec using OAI 3.0 (./server/translator.yaml)
- Then I implemented the server, simple, using express

## client folder
- Then I used Swagger to generate the code 
    - `brew install openapi-generator`
    - `openapi-generator generate -i translator.yaml -g typescript -o ~/source/typescript/openapi-01/`
- Then I wrote a test that uses the generated code (./client/tests/index.ts)
- All code in client is auto-generated, except for the test script

## to run

- open 2 consoles
    - in the first, in the server folder, `npm start`
    - in the second, in the client/tests folder, `ts-node index.ts`