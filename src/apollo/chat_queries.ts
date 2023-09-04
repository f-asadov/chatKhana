import { gql } from '@apollo/client'

export const All_THEMES = gql`
query getAllThemes{
  allThemes{
    themeName,
    id,
    themeTags
  }
}
`;

export const CREATE_THEME = gql`
mutation CreateTheme($themeName: String!, $themeTags: [String!]) {
  createTheme(
    createThemeInput: { themeName: $themeName, themeTags: $themeTags }
  ) {
    themeName
    id
    themeTags
  }
}

`