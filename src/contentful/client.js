import { createClient } from "contentful"

export const client = createClient({
     // This is the space ID. A space is like a project folder in Contentful terms
     space: 'lm3zkd6fnywn',
     // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
     accessToken: '09245226a9d6b0eeceea3494ec33ce6caa96ff802ccd7804426130421c4ff363'
});
