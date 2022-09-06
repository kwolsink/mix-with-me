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

describe("profiles", () => {
    it("should allow authenticated users to read anyones profile", async() => {
        const path = "users/alice/profile"
        await assertSucceeds(get(ref(ourDb, path)))
        await assertSucceeds(get(ref(theirDb, path)))
        await assertFails(get(ref(unAuthDb, path)))
    }),
    it("should allow a user to write to their own profile if it contains the correct fields", async() => {
        const path = "users/alice/profile"
        const exampleProfile = {
            artistName: 'foo',
            bio: 'im a music producer',
            lookingFor: 'a singer',
            skills: {
                producer: true,
                singer: false,
                rapper: false
            },
            producerSkills: {
                flStudio: false,
                abletonLive: true,
                logicPro: false
            }
        }
        await assertSucceeds(update(ref(ourDb, path), exampleProfile))
    }),
    it("should not allow a user to write to others profiles", async() => {
        const path = "users/alice/profile"
        const exampleProfile = {
            artistName: 'foo',
            bio: 'im a music producer',
            lookingFor: 'a singer',
            skills: {
                producer: true,
                singer: false,
                rapper: false
            },
            producerSkills: {
                flStudio: false,
                abletonLive: true,
                logicPro: false
            }
        }
        await assertFails(update(ref(theirDb, path), exampleProfile))
    }),
    it("should not allow a user to write invalid fields to their profile", async() => {
        const path = "users/alice/profile"
        const exampleProfile = {
            fakeField: 'foo',
            bio: 'im a music producer',
            lookingFor: 'a singer',
            skills: {
                producer: true,
                singer: false,
                rapper: false
            },
            producerSkills: {
                flStudio: false,
                abletonLive: true,
                logicPro: false
            }
        }
        await assertFails(update(ref(theirDb, path), exampleProfile))
    }),
    it("should not allow a user set their profile without an artist name", async() => {
        const path = "users/alice/profile"
        const exampleWrongProfile = {
            skills: {
                producer: true,
            }
        }
        await assertFails(set(ref(ourDb, path), exampleWrongProfile))
    })
})