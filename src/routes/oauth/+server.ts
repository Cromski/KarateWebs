import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, REDIRECT_URL } from "$env/static/private";

export const GET = async ({url, cookies}) => {
    
    const redirectURL = `${REDIRECT_URL}/oauth`;
    const code = await url.searchParams.get('code');
    // console.log('returned code', code)
    const all = cookies.getAll();
    // console.log("cookies", all)
    try{
        const oAuth2Client = new OAuth2Client(
            AUTH_GOOGLE_ID,
            AUTH_GOOGLE_SECRET,
            redirectURL
        )

        const r = await oAuth2Client.getToken(code)
        oAuth2Client.setCredentials(r.tokens);
        console.log('Auth tokens received')
        const user = oAuth2Client.credentials;
        console.log('credentials:',user)
        cookies.set("user", JSON.stringify(user),{ path: '/' })
        console.log("lolhaha: ",r)  
    }catch(err){
        console.log('error loging in with google',err)

    }
    redirect(303,'/');
}