### Required tools and libs

- React,
- Typescript,
- [Nextjs](https://nextjs.org/)
- [Wagmi](https://wagmi.sh/)
- [React-table](https://tanstack.com/table/v8/docs/guide/introduction)

### Entry data/files (src/data)

- Pool data configs
- PoolLogic contract abi

### Challenge details

#### Create nextjs app with simple functionality

Common Layout UI:

Header

- Connect to / disconnect from web3 wallet button
- Abstract logo link to home page

Pages:

Home Page

- Home page should display pool table

Table columns: symbol, chain, account balance, token price.
Table row should navigate to pool page.

Pool Page

- Pool summary card (address, symbol, chain, description, balance, token price)
  - useBalance to get the address, symbol, balance
    - token, description?

#### Hints

Use 'tokenPrice' contract method to read pool token price.

#### General recommendations

- Good code and file structure will be a strong plus;
- Minimal CSS styling will be a plus;
- Free hosted app will also be considered as a plus;
