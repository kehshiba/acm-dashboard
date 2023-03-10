#!/bin/sh
npm i & 
npm uninstall bcrypt &&
npm install bcrypt &&
npm run start
