require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note noise example install gloom outer story'; 
let testAccounts = [
"0xcfdde20346492d88c971b56432d75a86073b06a476f7b006e691367ad34fe20b",
"0xace12cc59aaf74f8c1ef2c575dbf9e0d9824bdea560b97a31f27985cdf3266c6",
"0x9b2b1f7107b6dd3df64536148ad56a7a581628406abad1f23c6ef4fe4cbe9179",
"0x922862a66344232e061ac2a5e2c6af6a8ccb44bcb7706c5b2a584290c7d85910",
"0x9bb4ef52a8cc75386d969d69b01ad0632ed81074fcb23aa5be3b1abeea415ca1",
"0x7668c2391265153781412f1ba4714d2088e43389f697679916ff3b2126b83dfc",
"0xf7266612edfc30b3be16c95ab5a746b6581ff8cbc0cb79136ad27693f10afd2d",
"0xf6ef15f7cfc66617feb180822f414538d18a8e81e31db855a7119403ecf4e7b5",
"0x7796a14b1d6c932a0686c57937c59ce82c5073a9e89d81c564b1e21a28830c25",
"0xdd5f10b95b9ca7e1f8360098ea05f7428d176da73a9637d0dc07287b385c8bac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

