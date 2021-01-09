import { useContext } from 'react';
import { NetworkContext } from 'common-components/NetworkHandler/NetworkProvider';

const useNetwork = () => useContext(NetworkContext);

export default useNetwork;
