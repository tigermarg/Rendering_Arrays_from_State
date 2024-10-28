import { learnerData } from "../utilities/data";
import Score from "./Score";

function Learner(){
    return(
        <>
        name: {learnerData.name},
        bio: {learnerData.bio},
        scores: <Score/>
        </>
    )
}
export default Learner;