import React from "react";
import {Rings} from 'react-loader-spinner'
const LoginPage = () => {
    return (
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#00A4E3"
          ariaLabel="rings-loading"
          />
    );
};

export default LoginPage;
