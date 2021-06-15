require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strong riot rural mistake just neck flock try'; 
let testAccounts = [
"0x8b4256d763e0fb2df09642c579f4255785113e4161b180c2426f55a7ea7ac710",
"0xb273cac452333e9015c01c9d157584758df806987180eede392562c77aed88ea",
"0x55fbb5e18812e8478a809812e28bab5c9bda4884c92fcf6092d777a2a7f6ff81",
"0x31be6c85573af586fc29f960f05d651b02cb8f450274742b0bc1ed376542a31c",
"0xff64c45d98586050ae76c8debd1463906b13c40a822c87574af59deeea7ce6d6",
"0xbb2e9a2e44eadd9b81c4ba0cb7f1a9ac1062886903fdae94ad9c0dcefc041a3c",
"0x8b9adb842d9ba84bb388851672ba8a033577c9d2b255bdf05526d70cbd002268",
"0xda495ff46467dd14c45598cd3c9b9301817afdb720beac3744eaad5ee02a32f3",
"0x08ebf6e79f91f021d3275f1206d315e3bbe2b271df4319962bc52129e2658273",
"0x3dce840b3d9d2d8c595b6de8f9410b22ee5723d31942ad202add1175dc394d53"
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

