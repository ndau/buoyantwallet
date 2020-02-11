/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import AsyncStorageMock from '@react-native-community/async-storage/jest/async-storage-mock'

AsyncStorageMock.getAllKeys = jest.fn(() => {
  return new Promise((resolve, reject) => {
    resolve(Object.keys(AsyncStorageMock.__INTERNAL_MOCK_STORAGE__))
  })
})

export default AsyncStorageMock
