import { initializeTestEnvironment, assertFails, assertSucceeds} from "@firebase/rules-unit-testing"

import {ref, get, update, set} from "firebase/database"
import { readFileSync } from "fs"

let testEnv
let ourDb
let theirDb
let unAuthDb

before(async () => {
    testEnv = await initializeTestEnvironment({
        projectId: "mix-with-me",
        database: {
            host:"localhost",
            port:9000,
            rules: readFileSync("database.rules.json", "utf8")}
    })
})

beforeEach(async () => {
    testEnv.clearDatabase()
    ourDb = testEnv.authenticatedContext("alice").database();
    theirDb = testEnv.authenticatedContext("bob").database();
    unAuthDb = testEnv.unauthenticatedContext().database();
})

describe("users", () => {

    it("should allow authenticated users to read anyones profile", async() => {
        const path = "users/alice/profile"
        await assertSucceeds(get(ref(ourDb, path)))
        await assertSucceeds(get(ref(theirDb, path)))
        await assertFails(get(ref(unAuthDb, path)))
    }),
    it("should allow users to write their own profile", async() => {
        const path = "users/alice/profile"
        await assertSucceeds(set(ref(ourDb, path), {"artist_name": "trusis"}))
        await assertFails(set(ref(theirDb, path), {"artist_name": "trusis"}))
        await assertFails(set(ref(unAuthDb, path), {"artist_name": "trusis"}))
    }),
    it("should only allow the user to read their own user root", async() => {
        const path = "users/alice"
        await assertSucceeds(get(ref(ourDb, path)))
        await assertFails(get(ref(theirDb, path)))
        await assertFails(get(ref(unAuthDb, path)))
    }),
    it("should allow the user to write their skills and update them", async() => {
        const path = "users/alice/profile/skills"
        await assertSucceeds(set(ref(ourDb, path), {ableton_live: true}))
        await assertSucceeds(update(ref(ourDb, path), {ableton_live: false, fl_studio: true}))
    }),
    it("shouldn't allow the user to write an invalid skill", async() => {
        const path = "users/alice/profile/skills"
        await assertFails(set(ref(ourDb, path), {fake_skill: true}))
        await assertFails(set(ref(ourDb, path), {ableton_live: "yesn't"}))
    }),
    it("shouldn't allow users to write random data to their profile", async() => {
        const path = "users/alice/profile"
        await assertFails(set(ref(ourDb, path), {fake_field: "test"}))
    })
})