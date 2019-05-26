import styled from 'styled-components'

const Styles = styled.section`
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  .grid-item {
    font-size: 30px;
    text-align: center;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  .color1 {
    background: ${props => props.theme.color1};
    color: ${props => props.theme.color10};
  }

  .color2 {
    background: ${props => props.theme.color2};
    color: ${props => props.theme.color6};
  }

  .color3 {
    background: ${props => props.theme.color3};
    color: ${props => props.theme.color6};
  }

  .color4 {
    background: ${props => props.theme.color4};
    color: ${props => props.theme.color1};
  }

  .color5 {
    background: ${props => props.theme.color5};
    color: ${props => props.theme.color6};
  }

  .color6 {
    background: ${props => props.theme.color6};
    color: ${props => props.theme.color1};
  }

  .color7 {
    background: ${props => props.theme.color7};
    color: ${props => props.theme.color1};
  }

  .color8 {
    background: ${props => props.theme.color8};
    color: ${props => props.theme.color1};
  }

  .color9 {
    background: ${props => props.theme.color9};
    color: ${props => props.theme.color6};
  }

  .color10 {
    background: ${props => props.theme.color10};
    color: ${props => props.theme.color1};
  }

  .color11 {
    background: ${props => props.theme.color11};
    color: ${props => props.theme.color1};
  }

  .color12 {
    background: ${props => props.theme.color12};
    color: ${props => props.theme.color6};
  }
`

const Colors = () => (
  <>
    <Styles>
      <div className='grid-container'>
        <div className='grid-item color1'>1 <br /><br />#27363b</div>
        <div className='grid-item color12'>12 <br /><br /> #334e52</div>
        <div className='grid-item color2'>2 <br /><br /> #557c83</div>
        <div className='grid-item color3'>3 <br /><br /> #3aafa9</div>
        <div className='grid-item color9'>9 <br /><br /> #019b94</div>
        <div className='grid-item color10'>10 <br /><br /> rgb(100, 255, 218)</div>
        <div className='grid-item color5'>5 <br /><br /> #a2d5ac</div>
        <div className='grid-item color6'>6 <br /><br /> #fff</div>
        <div className='grid-item color7'>7 <br /><br /> #eee</div>
        <div className='grid-item color11'>11 <br /><br /> #eee</div>
        <div className='grid-item color4'>4 <br /><br /> #dfdfdf</div>
        <div className='grid-item color8'>8 <br /><br /> #ccc</div>
      </div>
    </Styles>
  </>
)

export default Colors
