import { error, redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, REDIRECT_URL } from "$env/static/private";

export const actions= {
    OAuth2: async({}) =>{
        const redirectURL = `${REDIRECT_URL}/oauth`;

        const oAuth2Client = new OAuth2Client(
            AUTH_GOOGLE_ID,
            AUTH_GOOGLE_SECRET,
            redirectURL
        )
        const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope:'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
            prompt: 'consent'
        });

        redirect(302, authorizeUrl);
    }
}
