# how to start typescript project 

## step 1 
   npm init --y

## step 2 
  yarn global add tsc typescript ts-node ts-node-dev
  tsc --init
  update tsconfig.json (allowjavascript, rootDir, outDir)

## step 3 
  yarn add express
  yarn add @types/express --dev

## note
    tsc --init : to create tsconfig.json
    
    # what is ts-node?
    allow to compite .ts with tsc and run the output (js) with node, 
    In short, ts-node server.ts == tsc && node dist/server.js

    # what is ts-node-dev? 
    it works like nodemon for typescript
