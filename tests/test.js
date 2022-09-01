import { initializeTestEnvironment, assertFails, assertSucceeds} from "@firebase/rules-unit-testing"
import assert from 'assert'

import {ref, get} from 'firebase/database'
import { readFileSync } from "fs"

let testEnv
let ourDb
let theirDb
let unAuthDb

before(async () => {
    testEnv = await initializeTestEnvironment({
        projectId: "mix-with-me",
        database: {
            host:'localhost',
            port:9000,
            rules: readFileSync('database.rules.json', 'utf8')}
    })
})

beforeEach(async () => {
    testEnv.clearDatabase()
    ourDb = testEnv.authenticatedContext('alice').database();
    theirDb = testEnv.authenticatedContext('bob').database();
    unAuthDb = testEnv.unauthenticatedContext().database();
})

describe("users", () => {

    it("should allow authenticated users to read anyones profile", async() => {
        const path = 'users/alice/profile'
        await assertSucceeds(get(ref(ourDb, path)))
        await assertSucceeds(get(ref(theirDb, path)))
        await assertFails(get(ref(unAuthDb, path)))
    }),

    it("should only allow the user to read their user root", async() => {
        const path = 'users/alice'
        await assertSucceeds(get(ref(ourDb, path)))
        await assertFails(get(ref(theirDb, path)))
        await assertFails(get(ref(unAuthDb, path)))
    })
})