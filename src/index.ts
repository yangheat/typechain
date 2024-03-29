import crypto from 'crypto'

interface BlockShape {
    hash: string
    prevHash: string
    height: number
    data: string
}

class Block implements BlockShape{
    public hash: string
    constructor(
        public prevHash: string,
        public height: number,
        public data: string 
    ) {
        this.hash = Block.calculateHash(prevHash, height, data)
    }

    static calculateHash = (prevHash: string, height: number, data: string) => {
        const toHash = `${prevHash}${height}${data}}`
        return crypto.createHash('sha256').update(toHash).digest('hex')
    }
}

class Blockchain {
    private blocks: Block[]

    constructor() {
        this.blocks = []
    }

    getPrevHash () {
        if (this.blocks.length === 0) return ''
        return this.blocks[this.blocks.length - 1].hash
    }

    addBlock (data: string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data)
        this.blocks.push(newBlock)
    }

    public getBlocks () {
        return [...this.blocks]
    }

}

const blockchain = new Blockchain()
blockchain.addBlock('First One')
blockchain.addBlock('Second One')
blockchain.addBlock('Third One')
blockchain.addBlock('Fourth One')
blockchain.getBlocks().push(new Block('123123', 234234234, '345345345'))
console.log(blockchain.getBlocks())