import React,{useState,useEffect} from "react"; 
const TermsContent =() =>{
    const [TermData, SetTermData] = useState([]);
	const getTermApi = async () => {
		const response = await fetch('https://beta.myrung.com/b/api/v2/policies/termCondition');
		const data = await response.json();
		var insidData = data.data;
		SetTermData(insidData);
		// console.log(insidData[0].content);
		// localStorage.setItem("catgeroiesData",JSON.stringify(insidData))
	}
	useEffect(() => {
		getTermApi();
	}, []);
    return(
        <>
            
            <div className="page-content">
            	<div className="categories-page">
	                <div className="container">
                   { TermData.map((data, i) => {
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
export default TermsContent;