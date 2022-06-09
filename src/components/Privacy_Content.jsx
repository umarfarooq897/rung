import React,{useEffect,useState} from "react"; 
const PrivacyContent =() =>{
    const [PrivacyData, SetPrivacyData] = useState([]);
	const getPrivacyApi = async () => {
		const response = await fetch(' https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/policies/privacyPolicy');
		const data = await response.json();
		var insidData = data.data;
		SetPrivacyData(insidData);
		// console.log(insidData[0].content);
		// localStorage.setItem("catgeroiesData",JSON.stringify(insidData))
	}
	useEffect(() => {
		getPrivacyApi();
	}, []);
    return(
        <>
            
            <div className="page-content">
            	<div className="categories-page">
	                <div className="container">
                    { PrivacyData.map((data, i) => {
                       {/* console.log(data); */}
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
export default PrivacyContent;