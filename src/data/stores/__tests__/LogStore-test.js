import LogStore from '../LogStore'
import AppConfig from '../../config/AppConfig'

test('Make sure we can log and get the data out', async () => {
  LogStore.clear()
  LogStore.log('#1 testing 1...')
  LogStore.log('#2 testing 1...2...')

  class FileIO {
    async appendFile (path, data, encoding) {
      if (!data) return

      try {
        const dataToUse = JSON.parse(data)

        if (dataToUse.msg.indexOf('#1') !== -1) {
          expect(dataToUse.msg).toEqual('#1 testing 1...')
        } else if (dataToUse.msg.indexOf('#2') !== -1) {
          expect(dataToUse.msg).toEqual('#2 testing 1...2...')
        }
      } catch (error) {
        // hitting 'undefined'
      }
    }
  }

  await LogStore._logData.writeArrayToFile(new FileIO(), '/')
})

test('Make sure we DO NOT show private keys if they are present', async () => {
  LogStore.clear()
  LogStore.log(
    '#1 testing 1..."npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqxb"'
  )
  LogStore.log(
    '#2 testing "npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqxb" and public "npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y346npvtb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44b"'
  )

  class FileIO {
    async appendFile (path, data, encoding) {
      if (!data) return

      try {
        const dataToUse = JSON.parse(data.toString().trim())

        if (dataToUse.msg.indexOf('#1') !== -1) {
          expect(dataToUse.msg).toEqual('#1 testing 1..."*suppressed*"')
        } else if (dataToUse.msg.indexOf('#2') !== -1) {
          expect(dataToUse.msg).toBe(
            `#2 testing \"*suppressed*\" and public \"npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y346*suppressed*\"`
          )
        }
      } catch (error) {
        // hitting 'undefined'
      }
    }
  }

  await LogStore._logData.writeArrayToFile(new FileIO(), '/')
})

test('Make sure we DO NOT show private even when they are just in there without quotes', async () => {
  LogStore.clear()
  LogStore.log(
    '#1 testing 1...npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqxb'
  )
  LogStore.log(
    '#2 testing npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqxb" and public "npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y346npvtb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44b'
  )

  class FileIO {
    async appendFile (path, data, encoding) {
      if (!data) return

      try {
        const dataToUse = JSON.parse(data)

        if (dataToUse.msg.indexOf('#1') !== -1) {
          expect(dataToUse.msg).toEqual('#1 testing 1...*suppressed*')
        } else if (dataToUse.msg.indexOf('#2') !== -1) {
          expect(dataToUse.msg).toBe(
            '#2 testing *suppressed*" and public "npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y346*suppressed*'
          )
        }
      } catch (error) {
        // hitting 'undefined'
      }
    }
  }

  await LogStore._logData.writeArrayToFile(new FileIO(), '/')
})

test('Make sure we DO NOT show private keys and careful to not remove npvt somwhere in teh string needlessly', async () => {
  LogStore.clear()
  LogStore.log(
    '#1 testing 1..."npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqxb"'
  )
  LogStore.log(
    '#2 testing "*suppressed*" *suppressed* "npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqxb" and public "npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44b"'
  )

  class FileIO {
    async appendFile (path, data, encoding) {
      if (!data) return

      try {
        const dataToUse = JSON.parse(data)

        if (dataToUse.msg.indexOf('#1') !== -1) {
          expect(dataToUse.msg).toEqual('#1 testing 1..."*suppressed*"')
        } else if (dataToUse.msg.indexOf('#2') !== -1) {
          expect(dataToUse.msg).toBe(
            '#2 testing "*suppressed*" *suppressed* "*suppressed*" and public "npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44b"'
          )
        }
      } catch (error) {
        // hitting 'undefined'
      }
    }
  }

  await LogStore._logData.writeArrayToFile(new FileIO(), '/')
})

test('Make sure we do not go past the max', async () => {
  LogStore.clear()
  for (var i = 0; i < 350; i++) {
    LogStore.log(`entry for ${i}`)
  }

  class FileIO {
    constructor () {
      this._data = []
    }
    async appendFile (path, data, encoding) {
      if (!data) return
      this._data.push(data)
      expect(this._data.length <= AppConfig.MAX_LOG_ENTRIES).toBe(true)
    }
  }

  await LogStore._logData.writeArrayToFile(new FileIO(), '/')
})

test('Make sure we do not go past the max', async () => {
  LogStore.clear()
  for (var i = 0; i < 5000; i++) {
    LogStore.log(`entry for ${i}`)
  }

  class FileIO {
    constructor () {
      this._data = []
    }
    async appendFile (path, data, encoding) {
      if (!data) return
      this._data.push(data)
      expect(this._data.length <= AppConfig.MAX_LOG_ENTRIES).toBe(true)
    }
  }

  await LogStore._logData.writeArrayToFile(new FileIO(), '/')
})

test('Make sure we do not go past the max', async () => {
  LogStore.clear()
  for (var i = 0; i < 10000; i++) {
    LogStore.log(`entry for ${i}`)
  }

  class FileIO {
    constructor () {
      this._data = []
    }
    async appendFile (path, data, encoding) {
      if (!data) return
      this._data.push(data)
      expect(this._data.length <= AppConfig.MAX_LOG_ENTRIES).toBe(true)
    }
  }

  await LogStore._logData.writeArrayToFile(new FileIO(), '/')
})
