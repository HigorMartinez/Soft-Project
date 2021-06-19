import { gql } from '@apollo/client';

export const LOAD_DATA = gql`
query {
    Country {
        flag {svgFile}
        name
        capital
        area
        population
        topLevelDomains {name}
    }
}
`;