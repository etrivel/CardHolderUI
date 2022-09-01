import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloGQLClient from './graphql';


const AppGQLClient = (props)=>{
    return(
        <ApolloProvider client={ApolloGQLClient} >
            {props.children}
        </ApolloProvider>
    )
}

export default AppGQLClient;