import Nav from './nav';
import fetch from 'isomorphic-unfetch';
const Index = (props) => <div>
    <Nav />
    <h3>This is index page:::: {props.bpi.time.updated} </h3>
</div>;

Index.getInitialProps = async() => {

    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        bpi: data
    }
};



export default Index;