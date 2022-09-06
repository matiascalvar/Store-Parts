# STORE-PARTS

## API Documentation

To run the API you will just need the basics.

```
yarn
yarn start
```

or

```
npm install
npm run start
```

You should be able to see the service starting on port `8081`. After that, you would be able to access the following enpoints:

- `/store/parts` to get the all the parts Here you can use the query params `type` and `query` to filter the parts either by type, your query or both.

- `/store/part-types` to get the part types
