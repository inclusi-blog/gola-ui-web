import ajax from '../helpers/ajaxHelper';
import GET_INTERESTS from '../Config/api.routes.config';

const GetInterests = () => ajax.get(GET_INTERESTS);

export default GetInterests;
