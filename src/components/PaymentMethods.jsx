import { useState,useEffect } from "react";
import {
	PayPalScriptProvider,
	PayPalButtons,
	PayPalMarks,
} from "@paypal/react-paypal-js";

// This values are the props in the UI

const  PaymentMethods = (props) => {
	
    const [Gatway, setGateway] = useState();
	const getGatewaysApi = async () => {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/payment-types-active");
        const data = await response.json();
        var productData = data;
        setGateway(productData);
        // setIsloading(false)
    }
	console.log(Gatway)
    useEffect(() => {
        getGatewaysApi();
    }, []);
	var Total=props.total;
	const amount = Total;
	const currency = "USD";
	const style = {"color":"white"};
    // , "card", "paylater"
	const fundingSources = ["paypal","paylater"];
	// Remember the amount props is received from the control panel
	const [selectedFundingSource, setSelectedFundingSource] = useState(
		fundingSources[0]
	);

	function onChange(event) {
		setSelectedFundingSource(event.target.value);
	}

	return (
		<PayPalScriptProvider
			options={{
				"client-id": "AacSC55rZReivUoHpvstAVKwm-cc_97OEC3b0LRns3XDhtASngHHHjRbyNDWiE0ij-LOCKNMuUvGya43",
				components: "buttons,marks,funding-eligibility"
			}}
		>
			<form style={{ minHeight: "200px" }}>
				{fundingSources.map((fundingSource) => (
					<label className="mark" key={fundingSource}>
						<input
							defaultChecked={
								fundingSource === selectedFundingSource
							}
							onChange={onChange}
							type="radio"
							name="fundingSource"
							value={fundingSource}
						/>
						<PayPalMarks fundingSource={fundingSource} />
					</label>
				))}
			</form>
			<br />
			<PayPalButtons
				fundingSource={selectedFundingSource}
				style={style}
				forceReRender={[selectedFundingSource, style, amount, currency]}
				createOrder={(data, actions) => {
					return actions.order
						.create({
							purchase_units: [
								{
									amount: {
										currency_code: currency, // Here change the currency if needed
										value: amount, // Here change the amount if needed
									},
								},
							],
						})
						.then((orderId) => {
							// Your code here after create the order
							return (orderId);
							
						});
				}}
				onApprove={(data, actions) => {
					return actions.order.capture().then(function (details) {
						// Your code here after approve the transaction
					});
				}}
			/>
		</PayPalScriptProvider>
	);
}
export default PaymentMethods;