import axios from "axios";

const GITHUB_API = "https://api.github.com/users"


async function battle(firstUser: string, secondUser: string) {
    const starsFirstUser = await getUserStars(firstUser);
    const starsSecondUser = await getUserStars(secondUser);

    

    if (stars1>stars2) {
        return res.status(200).json({
            "winner": firstUser,
            "loser": secondUser,
            "draw": false
        })
    }else if(stars1<stars2){
        return res.status(200).json({
            "winner": secondUser,
            "loser": firstUser,
            "draw": false
        })
    }else {
        return res.status(200).json({
            "winner": null,
            "loser": null,
            "draw": true
        })
    }
}

async function getUserStars(username:string) {
    const user = await axios.get(`${GITHUB_API}/${username}/repos`);
    let stars = 0;

    user.data.forEach(({stargazers_count}) => {
        stars += stargazers_count 
    });

    return stars;
}





export const battleService = {
    battle,
}