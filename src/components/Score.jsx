import { learnerData } from '../utilities/data';

function Score(){
    return(
    <>
        date: {learnerData.scores.date},
        score: {learnerData.scores.score},    
    </>
    )

}

export default Score;

