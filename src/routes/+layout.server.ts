import moment from "moment";

export function load({ cookies }) {
    let userString = cookies.get("user");
    // console.log(userString)
    let userObj;
    if (userString)
    {
        userObj = moment(JSON.parse(userString).expiry_date) ? JSON.parse(userString) : undefined
    }
    //console.log("aaaaaaaaaaaaaaaaaaa", moment(JSON.parse(userString).expiry_date))
    // console.log("TEST", userObj)
	return {
        user:userObj
	};
}