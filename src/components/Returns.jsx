import React,{useEffect,useState} from "react"; 
const Returns_content =() =>{
    const [ReturnData, SetReturnData] = useState([]);
	const getReturnApi = async () => {
		const response = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/policies/return');
		const data = await response.json();
		var insidData = data.data;
		SetReturnData(insidData);
		// console.log(insidData[0].content);
		// localStorage.setItem("catgeroiesData",JSON.stringify(insidData))
	}
	useEffect(() => {
		getReturnApi();
	}, []);
    return(
        <>
            
            <div className="page-content">
            	<div className="categories-page">
	                <div className="container">
                    { ReturnData.map((data, i) => {
                       return data.content;
                    
                   })}
	                </div>
                    {/* <!-- End .container --> */}
                </div>
                {/* <!-- End .categories-page --> */}
			
				
            </div>
            {/* <!-- End .page-content --> */}
        </>
    );
}
export default Returns_content;