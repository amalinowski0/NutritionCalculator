import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import down_arrow from './images/down_arrow.png'

const listAnimation = keyframes`
0%{
opacity: 0;
transform: scaleY(0);
}
100%{
opacity: 1;
transform: scaleY(1);
}
`;

const Wrapper = styled.div`
transform-origin: top;
transition: transform 1s ease-in-out;
animation: ${listAnimation} 0.3s ease-in-out forwards;
`;

export default function NutTable({items = []}) {
    const [array, setArray] = useState([])
    const [openFat, setOpenFat] = useState(false)
    const [openCarbs, setOpenCarbs] = useState(false)
    const [openProtein, setOpenProtein] = useState(false)
    const [styledFatDiv, setStyledFatDiv] = useState(false)
    const [styledCarbsDiv, setStyledCarbsDiv] = useState(false)
    const [styledProteinDiv, setStyledProteinDiv] = useState(false)

    const fatItems = ['Monounsaturated', 'Polyunsaturated', 'Saturated', 'Trans']
    const carbsItems = ['Fiber', 'Sugars']
    const proteinItems = ['Vitamin K', 'Vitamin A', 'Vitamin B12', 'Vitamin B6', 'Vitamin C', 'Vitamin E', 'Calcium', 'Vitamin D', 'Niacin B3', 'Cholesterol', 'Sodium', 'Magnesium', 'Potassium', 'Iron', 'Zinc', 'Phosphorus', 'Thiamin B1', 'Riboflavin B2', 'Folic acid', 'Folate food', 'Folate equivalent total']
    
    useEffect(() => {
        setTimeout(() => {
            setStyledFatDiv(!styledFatDiv)
        }, 300)
    },[openFat])

    useEffect(() => {
        setTimeout(() => {
            setStyledCarbsDiv(!styledCarbsDiv)
        }, 300)
    },[openCarbs])

    useEffect(() => {
        setTimeout(() => {
            setStyledProteinDiv(!styledProteinDiv)
        }, 300)
    },[openProtein])

    const dropdown = (label) => {
        if(label==='Fat')
        {
            setOpenFat(!openFat)
        }
        else if(label==='Carbs')
        {
            setOpenCarbs(!openCarbs)
        }    
        else if(label==='Protein')
        {
            setOpenProtein(!openProtein)
        }
    }

    useEffect(createNutArray,[])

    function createNutArray() {
        let nutArray = items
        for(let i = 0;i<nutArray.length;i++)
        {
            nutArray[i].label = nutArray[i].label.replace(/[(),]/g,'')
            if(nutArray[i].quantity === 0){ 
                nutArray[i].quantity = '-'
                nutArray[i].unit = ''
            }
            if(nutArray[i].quantity > 0){nutArray[i].quantity = Math.round(nutArray[i].quantity)}
        }
        nutArray = nutArray.filter(element => element.label !== 'Energy')
        setArray(nutArray)
    }

    function MajorNutRow(props){
        const array_elem = array.find(elem => elem.label === props.label)
        return (
            array_elem ?
            <>
                <div className={`nut-nutTable-label`}>
                    {props.label}
                </div>
                <div className={`nut-nutTable-quantity`}>
                    {`${array_elem.quantity} ${array_elem.unit}`}
                    {(props.label === 'Fat') && <img className={openFat ? 'nutTable-row_arrow rotate' : 'nutTable-row_arrow'} src={down_arrow} alt='' width='10px' height='10px' />}
                    {(props.label === 'Carbs') && <img className={openCarbs ? 'nutTable-row_arrow rotate' : 'nutTable-row_arrow'} src={down_arrow} alt='' width='10px' height='10px' />}
                    {(props.label === 'Protein') && <img className={openProtein ? 'nutTable-row_arrow rotate' : 'nutTable-row_arrow'} src={down_arrow} alt='' width='10px' height='10px' />}
                </div>
            </> : null)
    }

    function MinorNutRows(props){
        let instances_existing = []
        switch(props.label)
        {
            case 'Fat': 
            {
                array.forEach(item => {
                    for(let i=0; i<=fatItems.length;i++)
                    {
                        if (item.label === fatItems[i]) {instances_existing.push(item)}
                    }
                })
                break;
            }
            case 'Carbs':
            {
                array.forEach(item => {
                    for(let i=0; i<=carbsItems.length;i++)
                    {
                        if (item.label === carbsItems[i]) {instances_existing.push(item)}
                    }
                })
                break;
            }
            case 'Protein':
            {
                array.forEach(item => {
                    for(let i=0; i<=proteinItems.length;i++)
                    {
                        if (item.label === proteinItems[i]) {instances_existing.push(item)}
                    }
                })
                break;
            }
            default: break;
        }
        if (props.label==="Fat")
        {  
            let final_rows = []
            for(let i=0;i<instances_existing.length;i++)
            {
                final_rows.push(<div key={instances_existing[i].label} className={`nut-nutTable-row fats`}>
                    <div className={`nut-nutTable-label`}>
                        {instances_existing[i].label}
                    </div>
                    <div className={`nut-nutTable-quantity`}>
                        {`${instances_existing[i].quantity} ${instances_existing[i].unit}`}
                    </div>
                </div>) 
            }
            if (final_rows.length > 0) 
            {
                if(styledFatDiv) 
                    {return <Wrapper>{final_rows}</Wrapper>}
                else
                    {return <div className='nutTable-wrapper'>{final_rows}</div>}
            }
            else { return null}
        }
        if (props.label==="Carbs")
        {
            let final_rows = []
            for(let i=0;i<instances_existing.length;i++)
            {
                final_rows.push(<div key={instances_existing[i].label} className={`nut-nutTable-row carbs`}>
                    <div className={`nut-nutTable-label`}>
                        {instances_existing[i].label}
                    </div>
                    <div className={`nut-nutTable-quantity`}>
                        {`${instances_existing[i].quantity} ${instances_existing[i].unit}`}
                    </div>
                </div>) 
            }
            if (final_rows.length > 0) 
            {
                if(styledCarbsDiv) 
                    {return <Wrapper>{final_rows}</Wrapper>}
                else
                    {return <div className='nutTable-wrapper'>{final_rows}</div>}
            }
            else { return null}
        }
        if (props.label==="Protein")
        {
            let final_rows = []
            for(let i=0;i<instances_existing.length;i++)
            {
                final_rows.push(<div key={instances_existing[i].label} className={`nut-nutTable-row proteins`}>
                    <div className={`nut-nutTable-label`}>
                        {instances_existing[i].label}
                    </div>
                    <div className={`nut-nutTable-quantity`}>
                        {`${instances_existing[i].quantity} ${instances_existing[i].unit}`}
                    </div>
                </div>) 
            }
            if (final_rows.length > 0) 
            {
                if(styledProteinDiv) 
                    {return <Wrapper>{final_rows}</Wrapper>}
                else
                    {return <div className='nutTable-wrapper'>{final_rows}</div>}
            }
            else { return null}
        }
        else {return null}
    }

    return (
        <React.Fragment>
            <div className="nut-nutTable">
                <div className="nut-nutTable-row Fat" onClick={() => dropdown('Fat')}>
                    <MajorNutRow label={'Fat'}/>
                </div>
                    {openFat && <MinorNutRows label={'Fat'}/>}
                <div className="nut-nutTable-row Carbs" onClick={() => dropdown('Carbs')}>
                    <MajorNutRow label={'Carbs'}/>
                </div>
                    {openCarbs && <MinorNutRows label={'Carbs'}/>}
                <div className="nut-nutTable-row Protein" onClick={() => dropdown('Protein')}>
                    <MajorNutRow label={'Protein'}/>
                </div>
                    {openProtein && <MinorNutRows label={'Protein'} />}
                <div className="nut-nutTable-row Water">
                    <MajorNutRow label={'Water'}/>
                </div>
            </div>
        </React.Fragment>
    )
}
