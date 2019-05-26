import styled from 'styled-components'

const CardStyles = styled.section`
  .ui.fluid.card {
    margin-bottom: 20px;
    padding-bottom: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  .ui.card > :first-child,
  .ui.cards > .card > :first-child {
    border-radius: 0 !important;
  }
`

export default CardStyles
