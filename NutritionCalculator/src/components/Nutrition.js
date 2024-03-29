import React, { PureComponent } from 'react'
import Axios from 'axios'
import CaloriesCircle from './CaloriesCircle'
import NutTable from './NutTable'
import { AiOutlineQuestionCircle as Help } from 'react-icons/ai';

class Nutrition extends PureComponent {

state = {
    app_id: '12955397',
    app_key: 'e7df1fdae012d4644bf91816e5c8a0c0',
    url: `https://api.edamam.com/api/nutrition-details?`,
    submitted: false,
    loaded: false,
    query: '',
    queryArray: [],
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
    helpOpen: false
}

 getData = async() => {
    await Axios({
        method:'POST',
        url: this.state.url,
        data: JSON.stringify({"ingr": this.state.queryArray}),
        headers: { 'Content-Type': 'application/json;charset=UTF-8'},
        params: {app_id: this.state.app_id, app_key: this.state.app_key}
    }).then((response) => {
        console.log(JSON.stringify(response))
            this.setState({ nutritionData: response.data}, () => this.parseResults())
            this.setState({loaded: true})
        }).catch((err) => {
            this.setState({submitted: false})
            window.alert(`ERROR!\n 
            We cannot calculate the nutrition for some ingredients.\n
            Please check spelling and/or enter missing quantity of ingredients.`);
            });
 }

 onChange = (e) => {
    this.setState({query: e.target.value})
}

 onSubmit = async(e) => {
    e.preventDefault()
    if(this.state.query !=='') {
        const ingrArray = this.state.query.split(',');
        this.setState({queryArray: ingrArray, submitted: true, /* test loaded: true*/ }, () => this.getData())
        //test
        //this.parseResults()
        //for testing purposes flat json file        
     }
    else {
        window.alert("Enter the recipe") 
    }
}

 parseResults = () => {
    //old response
    //const responseData = JSON.parse(`{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_20f289f625764d219cb0893436d20218","yield":2,"calories":360,"totalWeight":100,"dietLabels":["LOW_FAT"],"healthLabels":["SUGAR_CONSCIOUS","VEGAN","VEGETARIAN","PEANUT_FREE","TREE_NUT_FREE","ALCOHOL_FREE","SULPHITE_FREE"],"cautions":[],"totalNutrients":{"ENERC_KCAL":{"label":"Energy","quantity":360,"unit":"kcal"},"FAT":{"label":"Fat","quantity":0.58,"unit":"g"},"FASAT":{"label":"Saturated","quantity":0.158,"unit":"g"},"FAMS":{"label":"Monounsaturated","quantity":0.181,"unit":"g"},"FAPU":{"label":"Polyunsaturated","quantity":0.155,"unit":"g"},"CHOCDF":{"label":"Carbs","quantity":79.34,"unit":"g"},"PROCNT":{"label":"Protein","quantity":6.61,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"mg"},"NA":{"label":"Sodium","quantity":1,"unit":"mg"},"CA":{"label":"Calcium","quantity":9,"unit":"mg"},"MG":{"label":"Magnesium","quantity":35,"unit":"mg"},"K":{"label":"Potassium","quantity":86,"unit":"mg"},"FE":{"label":"Iron","quantity":0.8,"unit":"mg"},"ZN":{"label":"Zinc","quantity":1.16,"unit":"mg"},"P":{"label":"Phosphorus","quantity":108,"unit":"mg"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"mg"},"THIA":{"label":"Thiamin (B1)","quantity":0.07,"unit":"mg"},"RIBF":{"label":"Riboflavin (B2)","quantity":0.048,"unit":"mg"},"NIA":{"label":"Niacin (B3)","quantity":1.6,"unit":"mg"},"VITB6A":{"label":"Vitamin B6","quantity":0.145,"unit":"mg"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":9,"unit":"µg"},"FOLFD":{"label":"Folate (food)","quantity":9,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0,"unit":"µg"},"VITB12":{"label":"Vitamin B12","quantity":0,"unit":"µg"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"µg"},"WATER":{"label":"Water","quantity":12.89,"unit":"g"}},"totalDaily":{"ENERC_KCAL":{"label":"Energy","quantity":18,"unit":"%"},"FAT":{"label":"Fat","quantity":0.8923076923076922,"unit":"%"},"FASAT":{"label":"Saturated","quantity":0.79,"unit":"%"},"CHOCDF":{"label":"Carbs","quantity":26.446666666666665,"unit":"%"},"PROCNT":{"label":"Protein","quantity":13.22,"unit":"%"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"%"},"NA":{"label":"Sodium","quantity":0.041666666666666664,"unit":"%"},"CA":{"label":"Calcium","quantity":0.9,"unit":"%"},"MG":{"label":"Magnesium","quantity":8.333333333333334,"unit":"%"},"K":{"label":"Potassium","quantity":1.8297872340425532,"unit":"%"},"FE":{"label":"Iron","quantity":4.444444444444445,"unit":"%"},"ZN":{"label":"Zinc","quantity":10.545454545454545,"unit":"%"},"P":{"label":"Phosphorus","quantity":15.428571428571429,"unit":"%"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"%"},"THIA":{"label":"Thiamin (B1)","quantity":5.833333333333334,"unit":"%"},"RIBF":{"label":"Riboflavin (B2)","quantity":3.692307692307692,"unit":"%"},"NIA":{"label":"Niacin (B3)","quantity":10,"unit":"%"},"VITB6A":{"label":"Vitamin B6","quantity":11.153846153846152,"unit":"%"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":2.25,"unit":"%"},"VITB12":{"label":"Vitamin B12","quantity":0,"unit":"%"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"%"}},"ingredients":[{"text":"100g rice","parsed":[{"quantity":100,"measure":"gram","foodMatch":"rice","food":"rice","foodId":"food_bpumdjzb5rtqaeabb0kbgbcgr4t9","weight":100,"retainedWeight":100,"nutrients":{"RIBF":{"label":"Riboflavin","quantity":0.048,"unit":"mg"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"IU"},"THIA":{"label":"Thiamin","quantity":0.07,"unit":"mg"},"FAPU":{"label":"Fatty acids, total polyunsaturated","quantity":0.155,"unit":"g"},"NIA":{"label":"Niacin","quantity":1.6,"unit":"mg"},"ENERC_KCAL":{"label":"Energy","quantity":360,"unit":"kcal"},"FASAT":{"label":"Fatty acids, total saturated","quantity":0.158,"unit":"g"},"VITC":{"label":"Vitamin C, total ascorbic acid","quantity":0,"unit":"mg"},"PROCNT":{"label":"Protein","quantity":6.61,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"mg"},"FAMS":{"label":"Fatty acids, total monounsaturated","quantity":0.18099999999999997,"unit":"g"},"CHOCDF":{"label":"Carbohydrate, by difference","quantity":79.34,"unit":"g"},"FAT":{"label":"Total lipid (fat)","quantity":0.58,"unit":"g"},"VITB6A":{"label":"Vitamin B-6","quantity":0.145,"unit":"mg"},"VITB12":{"label":"Vitamin B-12","quantity":0,"unit":"µg"},"WATER":{"label":"Water","quantity":12.89,"unit":"g"},"K":{"label":"Potassium, K","quantity":86,"unit":"mg"},"P":{"label":"Phosphorus, P","quantity":108,"unit":"mg"},"NA":{"label":"Sodium, Na","quantity":1,"unit":"mg"},"ZN":{"label":"Zinc, Zn","quantity":1.16,"unit":"mg"},"CA":{"label":"Calcium, Ca","quantity":9,"unit":"mg"},"MG":{"label":"Magnesium, Mg","quantity":35,"unit":"mg"},"FE":{"label":"Iron, Fe","quantity":0.8,"unit":"mg"},"FOLFD":{"label":"Folate, food","quantity":9,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0,"unit":"µg"},"FOLDFE":{"label":"Folate, DFE","quantity":9,"unit":"µg"}},"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_gram","status":"OK"}]}],"totalNutrientsKCal":{"ENERC_KCAL":{"label":"Energy","quantity":359,"unit":"kcal"},"PROCNT_KCAL":{"label":"Calories from protein","quantity":27,"unit":"kcal"},"FAT_KCAL":{"label":"Calories from fat","quantity":5,"unit":"kcal"},"CHOCDF_KCAL":{"label":"Calories from carbohydrates","quantity":327,"unit":"kcal"}}}`)
    //new response
    //const responseData = JSON.parse(`{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_6f2b66842820405d93918e04f91ab3fa","yield":2,"calories":61,"totalWeight":43,"dietLabels":["LOW_CARB","LOW_SODIUM"],"healthLabels":["LOW_FAT_ABS","SUGAR_CONSCIOUS","LOW_POTASSIUM","KIDNEY_FRIENDLY","KETO_FRIENDLY","VEGETARIAN","PESCATARIAN","PALEO","SPECIFIC_CARBS","MEDITERRANEAN","DAIRY_FREE","GLUTEN_FREE","WHEAT_FREE","MILK_FREE","PEANUT_FREE","TREE_NUT_FREE","SOY_FREE","FISH_FREE","SHELLFISH_FREE","PORK_FREE","RED_MEAT_FREE","CRUSTACEAN_FREE","CELERY_FREE","MUSTARD_FREE","SESAME_FREE","LUPINE_FREE","MOLLUSK_FREE","ALCOHOL_FREE","NO_OIL_ADDED","NO_SUGAR_ADDED","SULPHITE_FREE","FODMAP_FREE","KOSHER"],"cautions":[],"totalNutrients":{"ENERC_KCAL":{"label":"Energy","quantity":61.49,"unit":"kcal"},"FAT":{"label":"Fat","quantity":4.0893,"unit":"g"},"FASAT":{"label":"Saturated","quantity":1.34418,"unit":"g"},"FATRN":{"label":"Trans","quantity":0.01634,"unit":"g"},"FAMS":{"label":"Monounsaturated","quantity":1.57294,"unit":"g"},"FAPU":{"label":"Polyunsaturated","quantity":0.82173,"unit":"g"},"CHOCDF":{"label":"Carbs","quantity":0.3096,"unit":"g"},"FIBTG":{"label":"Fiber","quantity":0,"unit":"g"},"SUGAR":{"label":"Sugars","quantity":0.1591,"unit":"g"},"PROCNT":{"label":"Protein","quantity":5.4008,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":159.96,"unit":"mg"},"NA":{"label":"Sodium","quantity":61.06,"unit":"mg"},"CA":{"label":"Calcium","quantity":24.08,"unit":"mg"},"MG":{"label":"Magnesium","quantity":5.16,"unit":"mg"},"K":{"label":"Potassium","quantity":59.339999999999996,"unit":"mg"},"FE":{"label":"Iron","quantity":0.7525,"unit":"mg"},"ZN":{"label":"Zinc","quantity":0.5547,"unit":"mg"},"P":{"label":"Phosphorus","quantity":85.14,"unit":"mg"},"VITA_RAE":{"label":"Vitamin A","quantity":68.8,"unit":"µg"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"mg"},"THIA":{"label":"Thiamin (B1)","quantity":0.0172,"unit":"mg"},"RIBF":{"label":"Riboflavin (B2)","quantity":0.19651000000000002,"unit":"mg"},"NIA":{"label":"Niacin (B3)","quantity":0.03225,"unit":"mg"},"VITB6A":{"label":"Vitamin B6","quantity":0.0731,"unit":"mg"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":20.21,"unit":"µg"},"FOLFD":{"label":"Folate (food)","quantity":20.21,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0,"unit":"µg"},"VITB12":{"label":"Vitamin B12","quantity":0.3827,"unit":"µg"},"VITD":{"label":"Vitamin D","quantity":0.86,"unit":"µg"},"TOCPHA":{"label":"Vitamin E","quantity":0.4515,"unit":"mg"},"VITK1":{"label":"Vitamin K","quantity":0.129,"unit":"µg"},"WATER":{"label":"Water","quantity":32.7445,"unit":"g"}},"totalDaily":{"ENERC_KCAL":{"label":"Energy","quantity":3.0745,"unit":"%"},"FAT":{"label":"Fat","quantity":6.2912307692307685,"unit":"%"},"FASAT":{"label":"Saturated","quantity":6.7209,"unit":"%"},"CHOCDF":{"label":"Carbs","quantity":0.10319999999999999,"unit":"%"},"FIBTG":{"label":"Fiber","quantity":0,"unit":"%"},"PROCNT":{"label":"Protein","quantity":10.8016,"unit":"%"},"CHOLE":{"label":"Cholesterol","quantity":53.32,"unit":"%"},"NA":{"label":"Sodium","quantity":2.5441666666666665,"unit":"%"},"CA":{"label":"Calcium","quantity":2.408,"unit":"%"},"MG":{"label":"Magnesium","quantity":1.2285714285714286,"unit":"%"},"K":{"label":"Potassium","quantity":1.2625531914893617,"unit":"%"},"FE":{"label":"Iron","quantity":4.180555555555555,"unit":"%"},"ZN":{"label":"Zinc","quantity":5.042727272727273,"unit":"%"},"P":{"label":"Phosphorus","quantity":12.162857142857144,"unit":"%"},"VITA_RAE":{"label":"Vitamin A","quantity":7.644444444444445,"unit":"%"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"%"},"THIA":{"label":"Thiamin (B1)","quantity":1.4333333333333333,"unit":"%"},"RIBF":{"label":"Riboflavin (B2)","quantity":15.116153846153848,"unit":"%"},"NIA":{"label":"Niacin (B3)","quantity":0.2015625,"unit":"%"},"VITB6A":{"label":"Vitamin B6","quantity":5.623076923076923,"unit":"%"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":5.0525,"unit":"%"},"VITB12":{"label":"Vitamin B12","quantity":15.945833333333333,"unit":"%"},"VITD":{"label":"Vitamin D","quantity":5.733333333333333,"unit":"%"},"TOCPHA":{"label":"Vitamin E","quantity":3.01,"unit":"%"},"VITK1":{"label":"Vitamin K","quantity":0.1075,"unit":"%"}},"totalNutrientsKCal":{"ENERC_KCAL":{"label":"Energy","quantity":61,"unit":"kcal"},"PROCNT_KCAL":{"label":"Calories from protein","quantity":22,"unit":"kcal"},"FAT_KCAL":{"label":"Calories from fat","quantity":38,"unit":"kcal"},"CHOCDF_KCAL":{"label":"Calories from carbohydrates","quantity":1,"unit":"kcal"}}}`)
    const responseData = this.state.nutritionData

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

    //total nutrients array
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

 ingredientList = () => {
    //const responseData = JSON.parse(`{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_20f289f625764d219cb0893436d20218","yield":2,"calories":360,"totalWeight":100,"dietLabels":["LOW_FAT"],"healthLabels":["SUGAR_CONSCIOUS","VEGAN","VEGETARIAN","PEANUT_FREE","TREE_NUT_FREE","ALCOHOL_FREE","SULPHITE_FREE"],"cautions":[],"totalNutrients":{"ENERC_KCAL":{"label":"Energy","quantity":360,"unit":"kcal"},"FAT":{"label":"Fat","quantity":0.58,"unit":"g"},"FASAT":{"label":"Saturated","quantity":0.158,"unit":"g"},"FAMS":{"label":"Monounsaturated","quantity":0.181,"unit":"g"},"FAPU":{"label":"Polyunsaturated","quantity":0.155,"unit":"g"},"CHOCDF":{"label":"Carbs","quantity":79.34,"unit":"g"},"PROCNT":{"label":"Protein","quantity":6.61,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"mg"},"NA":{"label":"Sodium","quantity":1,"unit":"mg"},"CA":{"label":"Calcium","quantity":9,"unit":"mg"},"MG":{"label":"Magnesium","quantity":35,"unit":"mg"},"K":{"label":"Potassium","quantity":86,"unit":"mg"},"FE":{"label":"Iron","quantity":0.8,"unit":"mg"},"ZN":{"label":"Zinc","quantity":1.16,"unit":"mg"},"P":{"label":"Phosphorus","quantity":108,"unit":"mg"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"mg"},"THIA":{"label":"Thiamin (B1)","quantity":0.07,"unit":"mg"},"RIBF":{"label":"Riboflavin (B2)","quantity":0.048,"unit":"mg"},"NIA":{"label":"Niacin (B3)","quantity":1.6,"unit":"mg"},"VITB6A":{"label":"Vitamin B6","quantity":0.145,"unit":"mg"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":9,"unit":"µg"},"FOLFD":{"label":"Folate (food)","quantity":9,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0,"unit":"µg"},"VITB12":{"label":"Vitamin B12","quantity":0,"unit":"µg"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"µg"},"WATER":{"label":"Water","quantity":12.89,"unit":"g"}},"totalDaily":{"ENERC_KCAL":{"label":"Energy","quantity":18,"unit":"%"},"FAT":{"label":"Fat","quantity":0.8923076923076922,"unit":"%"},"FASAT":{"label":"Saturated","quantity":0.79,"unit":"%"},"CHOCDF":{"label":"Carbs","quantity":26.446666666666665,"unit":"%"},"PROCNT":{"label":"Protein","quantity":13.22,"unit":"%"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"%"},"NA":{"label":"Sodium","quantity":0.041666666666666664,"unit":"%"},"CA":{"label":"Calcium","quantity":0.9,"unit":"%"},"MG":{"label":"Magnesium","quantity":8.333333333333334,"unit":"%"},"K":{"label":"Potassium","quantity":1.8297872340425532,"unit":"%"},"FE":{"label":"Iron","quantity":4.444444444444445,"unit":"%"},"ZN":{"label":"Zinc","quantity":10.545454545454545,"unit":"%"},"P":{"label":"Phosphorus","quantity":15.428571428571429,"unit":"%"},"VITC":{"label":"Vitamin C","quantity":0,"unit":"%"},"THIA":{"label":"Thiamin (B1)","quantity":5.833333333333334,"unit":"%"},"RIBF":{"label":"Riboflavin (B2)","quantity":3.692307692307692,"unit":"%"},"NIA":{"label":"Niacin (B3)","quantity":10,"unit":"%"},"VITB6A":{"label":"Vitamin B6","quantity":11.153846153846152,"unit":"%"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":2.25,"unit":"%"},"VITB12":{"label":"Vitamin B12","quantity":0,"unit":"%"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"%"}},"ingredients":[{"text":"100g rice","parsed":[{"quantity":100,"measure":"gram","foodMatch":"rice","food":"rice","foodId":"food_bpumdjzb5rtqaeabb0kbgbcgr4t9","weight":100,"retainedWeight":100,"nutrients":{"RIBF":{"label":"Riboflavin","quantity":0.048,"unit":"mg"},"VITD":{"label":"Vitamin D","quantity":0,"unit":"IU"},"THIA":{"label":"Thiamin","quantity":0.07,"unit":"mg"},"FAPU":{"label":"Fatty acids, total polyunsaturated","quantity":0.155,"unit":"g"},"NIA":{"label":"Niacin","quantity":1.6,"unit":"mg"},"ENERC_KCAL":{"label":"Energy","quantity":360,"unit":"kcal"},"FASAT":{"label":"Fatty acids, total saturated","quantity":0.158,"unit":"g"},"VITC":{"label":"Vitamin C, total ascorbic acid","quantity":0,"unit":"mg"},"PROCNT":{"label":"Protein","quantity":6.61,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0,"unit":"mg"},"FAMS":{"label":"Fatty acids, total monounsaturated","quantity":0.18099999999999997,"unit":"g"},"CHOCDF":{"label":"Carbohydrate, by difference","quantity":79.34,"unit":"g"},"FAT":{"label":"Total lipid (fat)","quantity":0.58,"unit":"g"},"VITB6A":{"label":"Vitamin B-6","quantity":0.145,"unit":"mg"},"VITB12":{"label":"Vitamin B-12","quantity":0,"unit":"µg"},"WATER":{"label":"Water","quantity":12.89,"unit":"g"},"K":{"label":"Potassium, K","quantity":86,"unit":"mg"},"P":{"label":"Phosphorus, P","quantity":108,"unit":"mg"},"NA":{"label":"Sodium, Na","quantity":1,"unit":"mg"},"ZN":{"label":"Zinc, Zn","quantity":1.16,"unit":"mg"},"CA":{"label":"Calcium, Ca","quantity":9,"unit":"mg"},"MG":{"label":"Magnesium, Mg","quantity":35,"unit":"mg"},"FE":{"label":"Iron, Fe","quantity":0.8,"unit":"mg"},"FOLFD":{"label":"Folate, food","quantity":9,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0,"unit":"µg"},"FOLDFE":{"label":"Folate, DFE","quantity":9,"unit":"µg"}},"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_gram","status":"OK"}]}],"totalNutrientsKCal":{"ENERC_KCAL":{"label":"Energy","quantity":359,"unit":"kcal"},"PROCNT_KCAL":{"label":"Calories from protein","quantity":27,"unit":"kcal"},"FAT_KCAL":{"label":"Calories from fat","quantity":5,"unit":"kcal"},"CHOCDF_KCAL":{"label":"Calories from carbohydrates","quantity":327,"unit":"kcal"}}}`)
    //const IngrRegex = new RegExp(`/[a-zA-Z0-9\s]+/i`)
    //const responseData = this.state.nutritionData
    //adding response ingredients to array
    let ingredients = []
    this.state.queryArray.forEach(item => {
        ingredients.push(<div key={item} className="nut-ingredient-list-content">{item}</div>)
    })
    return <div className="nut-ingredient-list.wrapper">{ingredients}</div>
 }

 refresh = () => {
    window.location.reload()
}

 testDelay = () => {
    setTimeout(() => {
        this.setState({loaded: true})
    }, 1000)
}

 toggleHelpOpen = () => {
    this.setState(prevState => ({helpOpen: !prevState.helpOpen}));
 }

render() {
    return (
    <div className={this.state.submitted ? "nutrition submitted":"nutrition"}>
        {this.state.helpOpen && 
            <div className="help-popup">
                <div className="help-inner">
                    <div className="help-text">
                        <p><h3>Make sure to separate ingredients with a comma!</h3></p>
                        <li>Always include quantity: "3g of butter cookies" is better than "butter cookies or tuilles"</li>
                        <li>Shorten and simplify the line: "2 cans of tomatoes" is better than "2-2 1/2 cans of tomatoes"</li>
                        <li>If oil is used for frying, indicate it in the ingredient line (add the words "for frying"), so we can calculate how much gets absorbed</li>
                        <li>For stocks and broths, enter "stock" or "broth" in the recipe field, or we'll assume it's a soup</li>
                    </div>
                    <button className="help-exitBtn" onClick={() => this.toggleHelpOpen()}>&times;</button>
                </div>
            </div>
        }
        <div className="nut-title">
            {!this.state.submitted ? <>
            <h1>Welcome To Nutrition Calculator</h1>
            <p>Calculate nutritional values of your favourite food in a matter of seconds!</p>
            <p>All you have to do is provide the list of ingredients in the field below.</p>
            </> 
            : <h2>ENJOY YOUR MEAL! :)</h2>}
        </div>
        <div className="nut-form">
            <form className="search-form" onSubmit={this.onSubmit}>
                <div className="search-form-wrapper">
                    <label className={this.state.submitted ? "nut-form-label hidden":"nut-form-label"}>Ingredients list</label>
                    {!this.state.submitted && 
                    <div className="nut-help"  onClick={this.toggleHelpOpen}>
                    <p>Help</p>
                    <Help className="nut-help-icon"/>
                    </div>}
                </div>
                <textarea className={this.state.submitted ? "text-ingr submitted":"text-ingr"} placeholder="Example recipe: &#10;1 egg,&#10;100g rice,&#10;2 peppers"
                rows="" onChange={this.onChange}/>
                {this.state.submitted ? <input className="btn-submit new" type="button" value="NEW RECIPE" onClick={this.refresh}/>
                : <input className="btn-submit" type="submit" value="CALCULATE"/>}
            </form>
            {(this.state.submitted && this.state.loaded) ? 
                <div className="nut-ingredient-list">
                    <p className="nut-ingredient-list-title">Ingredients: </p>
                    <svg className="line-divider">
                        <rect />
                    </svg>
                    {this.ingredientList()}
                </div> 
            : null}
        </div>
        {this.state.submitted &&
        <div className="nut-response">
            {/* {this.testDelay()} */}
            {this.state.loaded ?
                <div className="wrapper">
                    <div className="nut-calories">
                        <div className="nut-calories-chart">
                            <span className="nut-calories-text">Calories: {this.state.responseData.calories}</span>
                            <CaloriesCircle data={[
                            { name: 'Fat', value: this.state.responseData.fat.quantity },
                            { name: 'Carbs', value: this.state.responseData.carbs.quantity },
                            { name: 'Protein', value: this.state.responseData.protein.quantity },
                            ]}/>
                        </div>
                        <div className="nut-calories-labels">
                            <svg width="16" height="16">
                                <circle cx="8" cy="8" r="6" fill="#ff652f" />
                            </svg>
                            <p className="nut-calories-label">Fat</p>
                            <svg width="16" height="16">
                                <circle cx="8" cy="8" r="6" fill="#22ba26" />
                            </svg>
                            <p className="nut-calories-label">Carbs</p>
                            <svg width="16" height="16">
                                <circle cx="8" cy="8" r="6" fill="#1a98bd" />
                            </svg>
                            <p className="nut-calories-label">Proteins</p>
                        </div>
                    </div> 
                    <div className="nut-claims">
                        <div className="nut-claims-title">Nutrient claims</div>
                        <svg className="line-divider">
                            <rect />
                        </svg>
                        <span>{`${this.state.responseData.dietLabels} | `}
                        {this.state.responseData.healthLabels}</span>
                    </div>
                    <NutTable items={this.state.responseData.totalNutrients} />
                </div>  
            : <div className="loader">
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