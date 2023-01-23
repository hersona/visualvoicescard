import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sha256 = async (message) => {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);
  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
};

var basePath = process.env.REACT_APP_API_NODE;
var basePathToken = process.env.EC2_TOKEN;

async function callApiBearer(shaGenerated, surveyId, fetchWithBQ) {
  const randomResult = await fetchWithBQ(`/${shaGenerated}`);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + randomResult.data.access_token,
  };

  const result = await fetchWithBQ({
    url: `${basePath}/survey/${surveyId}`,
    method: "GET",
    headers,
  });

  return result.data ? { data: result.data } : { error: result.error };
}

export const surveyApi = createApi({
  reducerPath: "surveyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/token" }),
  endpoints: (build) => ({
    fetchSurvey: build.query({
      async queryFn(surveyId, _queryApi, _extraOptions, fetchWithBQ) {
        let ts = Date.now();
        let date_ob = new Date(ts);
        return sha256("OpenM1nd@2022" + date_ob.getDay()).then((res) => {
          return callApiBearer(res, surveyId, fetchWithBQ);
        });
      },
    }),
  }),
});
export const { useFetchSurveyQuery } = surveyApi;

export const surveyDemographicApi = createApi({
  reducerPath: "surveyDemopraphicApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (builder) => ({
    fetchSurveyDemographic: builder.query({
      query: ({ codProyecto, codUser }) => ({
        url: `/${codProyecto}/demographics/${codUser}`,
        method: "GET",
      }),
    }),
    addNewPost: builder.mutation({
      query: (payload) => ({
        url: "/demographics",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
export const { useFetchSurveyDemographicQuery, useAddNewPostMutation } =
  surveyDemographicApi;

export const surveyQuestionsApi = createApi({
  reducerPath: "surveyQuestionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (builder) => ({
    fetchSurveyQuestions: builder.query({
      query: ({ idProyecto, codUser, page, size }) => ({
        url: `/${idProyecto}/questions/${codUser}/${page}/${size}`,
        method: "GET",
      }),
    }),
    addNewAnswer: builder.mutation({
      query: (payload) => ({
        url: "/questions",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
export const { useFetchSurveyQuestionsQuery, useAddNewAnswerMutation } =
  surveyQuestionsApi;
