import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public timestamp: number;
    public data: string;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        timestamp: number,
        data: string,
    ) {
        this.index = index; 
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }

    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string,
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

    static validateStructure = (aBlock: Block): boolean => 
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
    
}

const genesisBlock:Block = new Block(0, "234324", "", 12345, "Hello");

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLastestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        newTimestamp,
        data
    );

    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        newTimestamp,
        data
    );
    addBlock(newBlock)

    return newBlock
};

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
);


const isBlockValuid = (
    candidateBlock: Block,
    previousBlock: Block
): boolean => {
    if(!Block.validateStructure(candidateBlock)) {
        return false;
    } else if(previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if(previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
}

const addBlock = (candidateBlock: Block): void => {
    if(isBlockValuid(candidateBlock, getLastestBlock())) {
        blockchain.push(candidateBlock);
    }
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};