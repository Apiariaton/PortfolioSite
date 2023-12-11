import {cardSliceActions} from "./card-slice";


export const  fetchCardData = () => 
{
    return async (dispatch)=>{

        async function retrieveCards()
        {
            const response = await fetch("https://quappa-373b1-default-rtdb.europe-west1.firebasedatabase.app/projects.json"); 
            return response;
        };
        
    try {
            const response = await retrieveCards();
            console.log(response);

                if (!response.ok)
                {
                    throw new Error("Error fetching data...");
                };

            const processed_response = await response.json();
            console.log(processed_response);
            const useable_data = await Object.values(Object.values(processed_response)[0]);
            console.log(useable_data);
            dispatch(cardSliceActions.addCards({"cards":useable_data}));
            dispatch(cardSliceActions.loadCards());
            console.log(processed_response,useable_data);

        }
    catch (error)
    {
        console.log(error);
        if (error === "Error fetching data...")
        {
            dispatch(cardSliceActions.setErrorMessage({error:true,errorMessage:"Error fetching data..."}));
        }
        else {
            dispatch(cardSliceActions.setErrorMessage({error:true,errorMessage:"Error processing data..."}));
        };
    };
    };
};