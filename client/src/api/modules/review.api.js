import privateClient from "../client/private.client"

const reviewEndpoints = {
    list: "reviews",
    add: "reviews",
    remove: ({ reviewId }) => `reviews/${reviewId}`
}

const reviewApi = {
    add: async ({
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content
    }) => {
        const response = await privateClient.post(

        )
    }
}

export default reviewApi