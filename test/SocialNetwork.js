const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai')
.use(require('chai-as-promised'))
.should

contract('SocialNetwork', ([deployer,author,tipper]) => {
 let socialNetwork

 before(async() => {
  socialNetwork = await SocialNetwork.deployed()
 })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
          const address = await socialNetwork.address
          assert.notEqual(address, 0x0)
          assert.notEqual(address,"")
          assert.notEqual(address, null)
          assert.notEqual(address, undefined)
         })

         it('has a name', async () => {
          const name = await socialNetwork.name()
          assert.equal(name,'Ved Social Network');
         })
        })

    describe('posts', async () => {
      let result,postCount

      it('Create Posts', async () => {
        result = await socialNetwork.createpost('This is my first post', {from: author }) 
        postCount = await socialNetwork.postCount()
        // SUCCESS
        assert.equal(postCount, 1)  
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),postCount.toNumber(), 'id is correct')
        assert.equal(event.content, 'This is my first post','Content is correct')
        assert.equal(event.tipamount,0, 'tip amount is correct')
        assert.equal(event.author,author, 'author is correct')
      
        // FAILURE : Post must have content
        await socialNetwork.createpost('', {from: author}).should.be.rejected;

      })

      it('Lists posts', async () => {
         //TODO : Fill me in
      })

      it('allows user to tip posts', async () => {
         //TODO: Fill me in
      }
      )
    })
        


    })
