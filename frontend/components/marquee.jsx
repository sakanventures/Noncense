const Marquee = () => {
    return (
        <div>
        <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
        <coingecko-coin-price-marquee-widget  
            coin-ids="bitcoin,ethereum,litecoin,ripple,solana,monero" 
            currency="usd" 
            background-color="#141414" 
            locale="en" 
            font-color="#02051A">    
        </coingecko-coin-price-marquee-widget>
        </div>
    );
}

export default Marquee;
