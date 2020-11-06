import React, { useState, useEffect } from 'react'

export default function Dropdown({items = []}) {
    const [array, setArray] = useState([])
    const [openFat, setOpenFat] = useState(false)
    const [openCarbs, setOpenCarbs] = useState(false)
    const [openProtein, setOpenProtein] = useState(false)

    const fatItems = ['Monounsaturated', 'Polyunsaturated', 'Saturated', 'Trans']
    const carbsItems = ['Fiber', 'Sugars']
    const proteinItems = ['Vitamin K', 'Vitamin A', 'Vitamin B12', 'Vitamin B6', 'Vitamin C', 'Vitamin E', 'Calcium', 'Vitamin D', 'Niacin B3', 'Cholesterol', 'Sodium', 'Magnesium', 'Potassium', 'Iron', 'Zinc', 'Phosphorus', 'Thiamin B1', 'Riboflavin B2', 'Folic acid', 'Folate food', 'Folate equivalent total']

    const dropdown = (label) => {
        if(label==='Fat')
        {
            setOpenFat(!openFat)
            console.log('dropdownfat')
        }
        else if(label==='Carbs')
        {
            setOpenCarbs(!openCarbs)
            console.log('dropdowncarb')
        }    
        else if(label==='Protein')
        {
            setOpenProtein(!openProtein)
            console.log('dropdownprot')
        }
    }

    useEffect(() => { 
        createNutArray()
    },[])

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
            <React.Fragment>
                <div className={`nut-nutTable-label`}>
                    {props.label}
                </div>
                <div className={`nut-nutTable-quantity`}>
                    {array_elem ? `${array_elem.quantity} ${array_elem.unit}` : null}
                </div>
            </React.Fragment>)
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
            //if fat or prot or carb open (clicked)
        if(openFat && props.label==="Fat")
        {  
            let final_rows = []
            for(let i=0;i<instances_existing.length;i++)
            {
                final_rows.push(<div key={instances_existing[i].label} className={`nut-nutTable-row-fats`}>
                    <div className={`nut-nutTable-label`}>
                        {instances_existing[i].label}
                    </div>
                    <div className={`nut-nutTable-quantity`}>
                        {`${instances_existing[i].quantity} ${instances_existing[i].unit}`}
                    </div>
                </div>) 
            }
            return final_rows
        }
        if (openCarbs && props.label==="Carbs")
        {
            let final_rows = []
            for(let i=0;i<instances_existing.length;i++)
            {
                final_rows.push(<div key={instances_existing[i].label} className={`nut-nutTable-row-carbs`}>
                    <div className={`nut-nutTable-label`}>
                        {instances_existing[i].label}
                    </div>
                    <div className={`nut-nutTable-quantity`}>
                        {`${instances_existing[i].quantity} ${instances_existing[i].unit}`}
                    </div>
                </div>) 
            }
            return final_rows
        }
        if (openProtein && props.label==="Protein")
        {
            let final_rows = []
            for(let i=0;i<instances_existing.length;i++)
            {
                final_rows.push(<div key={instances_existing[i].label} className={`nut-nutTable-row-protein`}>
                    <div className={`nut-nutTable-label`}>
                        {instances_existing[i].label}
                    </div>
                    <div className={`nut-nutTable-quantity`}>
                        {`${instances_existing[i].quantity} ${instances_existing[i].unit}`}
                    </div>
                </div>) 
            }
            return final_rows
        }
        else {return null}
    }

    return (
        <React.Fragment>
            <div className="nut-nutTable">
                <div className="nut-nutTable-Fat-row" onClick={() => dropdown('Fat')}>
                    <MajorNutRow label={'Fat'}/>
                </div>
                    <MinorNutRows label={'Fat'}/>
                <div className="nut-nutTable-Carbs-row" onClick={() => dropdown('Carbs')}>
                    <MajorNutRow label={'Carbs'}/>
                </div>
                    <MinorNutRows label={'Carbs'}/>
                <div className="nut-nutTable-Protein-row" onClick={() => dropdown('Protein')}>
                    <MajorNutRow label={'Protein'}/>
                </div>
                    <MinorNutRows label={'Protein'} />
                <div className="nut-nutTable-Water-row">
                 <MajorNutRow label={'Water'}/>
                </div>
            </div>
        </React.Fragment>
    )
}
