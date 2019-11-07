import Nav from './nav';
import Prices from './prices';
import fetch from 'isomorphic-unfetch';
const Index = (props) => <div>
    <Nav />
    <h3>This is index page: </h3>
    <Prices bpi={props.bpi} />
</div>;

Index.getInitialProps = async() => {

    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        bpi: data.bpi
    }
};



export default Index;