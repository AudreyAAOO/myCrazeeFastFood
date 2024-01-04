import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import Navbar from "../../Navbar";
// import fakeMenu from "../../../fakeData";

const OrderPage = () => {
	const params = useParams();
	console.log("params", params);


	//nfn snippet

	return (
    <div>
      <Navbar />
     Bonjour {params.inputValue} !
    </div>

  );
};

export default OrderPage;
