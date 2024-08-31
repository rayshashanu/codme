import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DiscountValidationPage = () => {
    const [isValid, setIsValid] = useState(null);
    const [code, setCode] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Extract the discount code from the URL query parameters
        const params = new URLSearchParams(location.search);
        const discountCode = params.get('code');
        setCode(discountCode);

        // Validate the discount code
        validateDiscountCode(discountCode);
    }, [location.search]);

    const validateDiscountCode = (code) => {
        // Simulate discount code validation (replace with real API call)
        const validCodes = ['DISCOUNT10', 'DISCOUNT20']; // Example valid codes
        if (validCodes.includes(code)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className="discount-validation-page" style={{backgroundColor:'#ed54a4',display:'flex',justifyContent:'space-evenly',color:'white',width:'1450px',height:'1600',padding:'20px'}}>
            <h2>Discount Validation</h2>
            {code && (
                <div className="discount-result">
                    <p>Applied Code: {code}</p>
                    {isValid === null ? (
                        <p>Validating code...</p>
                    ) : isValid ? (
                        <p>Discount code is valid!</p>
                    ) : (
                        <p>Invalid discount code.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default DiscountValidationPage;
