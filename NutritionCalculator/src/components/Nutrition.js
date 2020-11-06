import React, { PureComponent } from 'react'
import Axios from 'axios'
import CaloriesCircle from './CaloriesCircle'
import Dropdown from './Dropdown'

class Nutrition extends PureComponent {

state = {
    app_id: '12955397',
    app_key: 'e7df1fdae012d4644bf91816e5c8a0c0',
    url: `https://api.edamam.com/api/nutrition-details?`,
    submitted: false,
    loaded: false,
    query: '',
    nutritionData: '',
    responseData: {
        calories: '',
        dietLabels: '',
        healthLabels: '',
        totalNutrients: [],
        fat: 0,
        carbs: 0,
        protein: 0
    },
}

 getData = async() => {
    await Axios({
        method:'POST',
        url: this.state.url,
        data: JSON.stringify({"ingr": [this.state.query]}),
        headers: { 'Content-Type': 'application/json;charset=UTF-8'},
        params: {app_id: this.state.app_id, app_key: this.state.app_key}
    }).then((response) => {
            this.setState({ nutritionData: response.data})
            setTimeout(() => {
                this.setState({loaded: true})
            }, 1000)
        }).catch((err) => {
            console.log("ERROR: ====", err);
            });
}

 onChange = (e) => {
    this.setState({query: e.target.value})
}

 onSubmit = async(e) => {
    e.preventDefault()
    if(this.state.query !=='') {
        //for testing pusposes flat json file
        //await this.getData()
        this.setState({submitted: true})
        
        //||TODO try catch///
        this.parseResults()
     }
    else {
        //TODO alercik
        console.log("Insert ingredients :)")
    }
}

 parseResults = () => {
    const responseData = JSON.parse(`{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_20f289f625764d219cb0893436d20218","yield":2,"calories":360,"totalWeight":100,"dietLabels":["LOW_FAT"],"healthLabels":["SUGAR_CONSCIOUS","VEGAN","VEGETARIAN","PEANUT_FREE","TREE_NUT_FREE","ALCOHOL_FREE","SULPHITE_FREE"],"cautions":[],"totalNutrients":{"ENERC_KCAL":{"label":"Energy","quantity":360,"unit":"kcal"},"FAT":{"label":"Fat","quantity":0.58,"unit":"g"},"FASAT":{"label":"Saturated","quantity":0.158,"unit":"g"},"FAMS":{"label":"Monounsaturated","quantity":0.181,"unit":"g"},"FAPU":{"label":"Polyunsaturated","quantity":0.155,"unit":"g"},"CHOCDF":{"label":"Carbs","quantity":79.34,"unit":"g"},"PROCNT":{"label":"Protein","quantity":6.61,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"mg"},"NA":{"label":"Sodium","quantity":1,"unit":"mg"},"CA":{"label":"Calcium","quantity":9,"unit":"mg"},"MG":{"label":"Magnesium","quantity":35,"unit":"mg"},"K":{"label":"Potassium","quantity":86,"unit":"mg"},"FE":{"label":"Iron","quantity":0.8,"unit":"mg"},"ZN":{"label":"Zinc","quantity":1.16,"unit":"mg"},"P":{"label":"Phosphorus","quantity":108,"unit":"mg"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"mg"},"THIA":{"label":"Thiamin (B1)","quantity":0.07,"unit":"mg"},"RIBF":{"label":"Riboflavin (B2)","quantity":0.048,"unit":"mg"},"NIA":{"label":"Niacin (B3)","quantity":1.6,"unit":"mg"},"VITB6A":{"label":"Vitamin B6","quantity":0.145,"unit":"mg"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":9,"unit":"µg"},"FOLFD":{"label":"Folate (food)","quantity":9,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0,"unit":"µg"},"VITB12":{"label":"Vitamin B12","quantity":0,"unit":"µg"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"µg"},"WATER":{"label":"Water","quantity":12.89,"unit":"g"}},"totalDaily":{"ENERC_KCAL":{"label":"Energy","quantity":18,"unit":"%"},"FAT":{"label":"Fat","quantity":0.8923076923076922,"unit":"%"},"FASAT":{"label":"Saturated","quantity":0.79,"unit":"%"},"CHOCDF":{"label":"Carbs","quantity":26.446666666666665,"unit":"%"},"PROCNT":{"label":"Protein","quantity":13.22,"unit":"%"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"%"},"NA":{"label":"Sodium","quantity":0.041666666666666664,"unit":"%"},"CA":{"label":"Calcium","quantity":0.9,"unit":"%"},"MG":{"label":"Magnesium","quantity":8.333333333333334,"unit":"%"},"K":{"label":"Potassium","quantity":1.8297872340425532,"unit":"%"},"FE":{"label":"Iron","quantity":4.444444444444445,"unit":"%"},"ZN":{"label":"Zinc","quantity":10.545454545454545,"unit":"%"},"P":{"label":"Phosphorus","quantity":15.428571428571429,"unit":"%"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"%"},"THIA":{"label":"Thiamin (B1)","quantity":5.833333333333334,"unit":"%"},"RIBF":{"label":"Riboflavin (B2)","quantity":3.692307692307692,"unit":"%"},"NIA":{"label":"Niacin (B3)","quantity":10,"unit":"%"},"VITB6A":{"label":"Vitamin B6","quantity":11.153846153846152,"unit":"%"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":2.25,"unit":"%"},"VITB12":{"label":"Vitamin B12","quantity":0,"unit":"%"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"%"}},"ingredients":[{"text":"100g rice","parsed":[{"quantity":100,"measure":"gram","foodMatch":"rice","food":"rice","foodId":"food_bpumdjzb5rtqaeabb0kbgbcgr4t9","weight":100,"retainedWeight":100,"nutrients":{"RIBF":{"label":"Riboflavin","quantity":0.048,"unit":"mg"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"IU"},"THIA":{"label":"Thiamin","quantity":0.07,"unit":"mg"},"FAPU":{"label":"Fatty acids, total polyunsaturated","quantity":0.155,"unit":"g"},"NIA":{"label":"Niacin","quantity":1.6,"unit":"mg"},"ENERC_KCAL":{"label":"Energy","quantity":360,"unit":"kcal"},"FASAT":{"label":"Fatty acids, total saturated","quantity":0.158,"unit":"g"},"VITC":{"label":"Vitamin C, total ascorbic acid","quantity":0,"unit":"mg"},"PROCNT":{"label":"Protein","quantity":6.61,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"mg"},"FAMS":{"label":"Fatty acids, total monounsaturated","quantity":0.18099999999999997,"unit":"g"},"CHOCDF":{"label":"Carbohydrate, by difference","quantity":79.34,"unit":"g"},"FAT":{"label":"Total lipid (fat)","quantity":0.58,"unit":"g"},"VITB6A":{"label":"Vitamin B-6","quantity":0.145,"unit":"mg"},"VITB12":{"label":"Vitamin B-12","quantity":0,"unit":"µg"},"WATER":{"label":"Water","quantity":12.89,"unit":"g"},"K":{"label":"Potassium, K","quantity":86,"unit":"mg"},"P":{"label":"Phosphorus, P","quantity":108,"unit":"mg"},"NA":{"label":"Sodium, Na","quantity":1,"unit":"mg"},"ZN":{"label":"Zinc, Zn","quantity":1.16,"unit":"mg"},"CA":{"label":"Calcium, Ca","quantity":9,"unit":"mg"},"MG":{"label":"Magnesium, Mg","quantity":35,"unit":"mg"},"FE":{"label":"Iron, Fe","quantity":0.8,"unit":"mg"},"FOLFD":{"label":"Folate, food","quantity":9,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0,"unit":"µg"},"FOLDFE":{"label":"Folate, DFE","quantity":9,"unit":"µg"}},"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_gram","status":"OK"}]}],"totalNutrientsKCal":{"ENERC_KCAL":{"label":"Energy","quantity":359,"unit":"kcal"},"PROCNT_KCAL":{"label":"Calories from protein","quantity":27,"unit":"kcal"},"FAT_KCAL":{"label":"Calories from fat","quantity":5,"unit":"kcal"},"CHOCDF_KCAL":{"label":"Calories from carbohydrates","quantity":327,"unit":"kcal"}}}`)
    //const responseData = this.state.nutritionData
    //console.log(responseData)

    //adding response nutrient data to state |

    // Health/diet labels
    let dietLabel = ''
    responseData.dietLabels.forEach(label => {
            dietLabel += label + " | "
    })
    dietLabel = dietLabel.replace(/_/g, ' ')
    dietLabel = dietLabel.toLowerCase()
    
    if (dietLabel !== '' && dietLabel[dietLabel.length - 2] === '|')
    {dietLabel = dietLabel.substring(0, dietLabel.length - 2)}

    let healthLabel = ''
    responseData.healthLabels.forEach(label => {
        healthLabel += label + " | "
    })
    healthLabel = healthLabel.replace(/_/g, ' ')
    healthLabel = healthLabel.toLowerCase()

    if (healthLabel !== '' && healthLabel[healthLabel.length - 2] === '|')
    {healthLabel = healthLabel.substring(0, healthLabel.length - 2)}

    //total nutrients table
    let nutLabel = []
    const totalnut = responseData.totalNutrients

    Object.keys(totalnut).map((item,index) => {
        nutLabel.push(totalnut[item])
        return 0
        })

    this.setState({responseData: {
        calories: responseData.calories,
        dietLabels: dietLabel,
        healthLabels: healthLabel,
        totalNutrients: nutLabel,
        fat: nutLabel.find(item => item.label === "Fat"),
        carbs: nutLabel.find(item => item.label === "Carbs"),
        protein: nutLabel.find(item => item.label === "Protein")
    } })
}

testDelay = () => {
    setTimeout(() => {
        this.setState({loaded: true})
    }, 1000)
}

render() {
    return (
    <div className={this.state.submitted ? "nutrition-submitted":"nutrition"}>
        <div className="nut-form">
            <div className="nut-title">
                <h1>Calculate Nutrition Values</h1>
            </div>
            <form className="search-form" onSubmit={this.onSubmit}>
                <label className="nut-form-label">Ingriedients list</label>
                <textarea className={this.state.submitted ? "text-ingr-submitted":"text-ingr"} placeholder="Example recipe: &#10;1 egg,&#10;100g rice,&#10;2 paprikas"
                rows="" onChange={this.onChange}/>
                <input className="btn-submit" type="submit" value="CALCULATE"/>
            </form>
        </div>
        {this.state.submitted &&
        <div className="nut-response">
            {this.testDelay()}
            {this.state.loaded ?
                <div className="wrapper" ref = {this.wrapper_ref}>
                    <div className="nut-calories">
                        <span className="nut-calories-text">Calories: {this.state.responseData.calories}</span>
                        <CaloriesCircle data={[
                        { name: 'Fat', value: this.state.responseData.fat.quantity },
                        { name: 'Carbs', value: this.state.responseData.carbs.quantity },
                        { name: 'Protein', value: this.state.responseData.protein.quantity },
                    ]}/>
                    </div> 
                    <div className="nut-daily">
                        Daily
                    </div>
                    <div className="nut-claims">
                        <span>{`${this.state.responseData.dietLabels} | `}
                        {this.state.responseData.healthLabels}</span>
                    </div>
                    <Dropdown items={this.state.responseData.totalNutrients} />
                </div>  
            : <div className="loader" ref = {this.loader_ref}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            }
        </div>}
    </div>
)}
}

export default Nutrition;