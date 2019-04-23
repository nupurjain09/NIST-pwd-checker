# Background
This project is a [NIST](https://www.nist.gov/)  [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) compliant password checker.

Passwords MUST

1. Have an 8 character minimum
2. AT LEAST 64 character maximum
2. Allow all ASCII characters and spaces (unicode optional)
4. Not be a common password

# Methodology
To meet the last requirement, this project loads the list of common passwords in a bloom filter. 
Bloom filter is a space efficient probablistic data-structure. This implementation relies on following non-cryptographic hash functions.
 - Fowler–Noll–Vo hash function.
 - Jenkins hash function.
 
 # Optimizations
 - For better user experience, the parsing and storage of common passwords in the bloom filter is done using a worker thread. 
 - Since we only accept passwords of a certain length, only those passwords from the common passwords list that meet the length criteria are inserted in the bloom filter. 
## Running the local server

### System Requirments

* node v8.10.0+
* npm v5.0.0+

### Run

```
npm install
webpack // builds the project
node server.js // bootup server
```
Server will be available at http://localhost:3000/ and the ./app directory will be mounted to '/'.

To build a productionized (minified) version of the project set 
```$xslt
mode: production
```
in ```webpack.config.js```

To run tests ```npm run test``` and launch http://localhost:8080/