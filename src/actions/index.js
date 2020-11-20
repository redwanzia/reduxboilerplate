// Action creator
import jsonPlaceholder from '../apis/jasonPlaceHolder'


export const fetchPost =  () => {

	return async  (dispatch, getState)=>{
		const response  =  await jsonPlaceholder.get('/posts')


		dispatch(	{
			type: 'FETCH_POST',
			payload: response.data
	
		})

	}
};
 

