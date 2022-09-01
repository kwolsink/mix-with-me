import { initializeTestEnvironment, assertFails, assertSucceeds} from "@firebase/rules-unit-testing"
import assert from 'assert'
let testEnv

before(async () => {
    testEnv = await initializeTestEnvironment({
        projectId: "mix-with-me"
    })
})


beforeEach(async () => {
    testEnv.clearDatabase()
})

describe("test", () => {
    it("should work", async() => {
        assert.equal(4, 2+2)
    })
})