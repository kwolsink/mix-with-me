export default interface Profile {
    artistName: string,
    bio: string,
    lookingFor: string,
    skills: {
        producer: boolean,
        singer: boolean,
        rapper: boolean
    },
    producerSkills: {
        flStudio: boolean,
        abletonLive: boolean,
        logicPro: boolean
    }
}