import styled from "@emotion/styled";

/**
 * Shorthand for `style = {{display: "flex", flexDirection :"row"}}`
 */
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
/**
 * Shorthand for `style = {{display: "Column", flexDirection :"column"}}`
 */
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

/**
 * Has a single parameter, `space`, the specifies the space between every 2 children in rem.
 */
export const SpacedRow = styled(Row)`
  & > *:not(:last-child) {
    margin-right: ${(props: {space: number}) => props.space}rem;
  }
`
/**
 * Has a single parameter, `space`, the specifies the space between every 2 children in rem.
 */
export const SpacedColumn = styled(Column)`
  & > *:not(:last-child) {
    margin-bottom: ${(props: {space: number}) => props.space}rem;
  }
`