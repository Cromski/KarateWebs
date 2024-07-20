import { redirect } from "@sveltejs/kit";

export function load({ cookies }) {
    cookies.delete('user', { path: '/' });
    redirect(302,"/")
}