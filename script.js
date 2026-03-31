const toolData = {
    // HEALTH
    bmi: { title: "BMI Calculator", icon: "fa-weight", inputs: [{id:"w", label:"Weight (kg)"}, {id:"h", label:"Height (cm)"}], article: "Calculate your Body Mass Index (BMI) to see if you are in a healthy weight range. Our visual meter helps you understand your results instantly.", logic: (v) => {
        let bmi = (v[0]/((v[1]/100)**2)).toFixed(1);
        let pos = Math.min(Math.max((bmi - 15) / (40 - 15) * 100, 0), 98);
        document.getElementById('bmi-meter-wrapper').style.display = 'block';
        setTimeout(() => { document.getElementById('bmi-needle').style.left = pos + "%"; }, 50);
        return `Your BMI: <span class="res-big">${bmi}</span>`;
    }},
    bodyfat: { title: "Body Fat %", icon: "fa-percentage", inputs: [{id:"w", label:"Waist (cm)"}, {id:"n", label:"Neck (cm)"}, {id:"h", label:"Height (cm)"}], article: "Estimate your body fat percentage using the US Navy method.", logic: (v) => `Est. Fat: <span class="res-big">${(495/(1.0324 - 0.19077*Math.log10(v[0]-v[1]) + 0.15456*Math.log10(v[2])) - 450).toFixed(1)}%</span>` },
    age: { title: "Age Calculator", icon: "fa-birthday-cake", inputs: [{id:"d", label:"Birth Date", type:"date"}], article: "Calculate exactly how old you are in years and months.", logic: (v) => `Age: <span class="res-big">${Math.floor((new Date() - new Date(v[0]))/31557600000)} Years</span>` },
    water: { title: "Water Intake", icon: "fa-tint", inputs: [{id:"w", label:"Weight (kg)"}], article: "Get personalized daily hydration goals based on your weight.", logic: (v) => `Goal: <span class="res-big">${(v[0]*0.033).toFixed(1)} Liters/Day</span>` },
    calories: { title: "BMR Calculator", icon: "fa-fire", inputs: [{id:"w", label:"Weight"}, {id:"h", label:"Height"}, {id:"a", label:"Age"}], article: "Find your Basal Metabolic Rate to understand your daily calorie needs.", logic: (v) => `BMR: <span class="res-big">${Math.round(10*v[0] + 6.25*v[1] - 5*v[2] + 5)} kcal</span>` },

    // FINANCE
    loan: { title: "Loan Calculator", icon: "fa-money-bill", inputs: [{id:"a", label:"Amount"}, {id:"r", label:"Rate %"}, {id:"t", label:"Years"}], article: "Estimate your monthly loan or mortgage repayments with interest.", logic: (v) => `Monthly: <span class="res-big">$${(v[0]*(v[1]/1200)/(1-Math.pow(1+v[1]/1200,-(v[2]*12)))).toFixed(2)}</span>` },
    discount: { title: "Discount Calc", icon: "fa-tag", inputs: [{id:"p", label:"Price"}, {id:"d", label:"% Off"}], article: "Instantly see how much you save during a sale.", logic: (v) => `Price: <span class="res-big">$${(v[0]-(v[0]*v[1]/100)).toFixed(2)}</span>` },
    tax: { title: "Sales Tax", icon: "fa-receipt", inputs: [{id:"p", label:"Price"}, {id:"t", label:"Tax %"}], article: "Calculate the final price including state or local sales tax.", logic: (v) => `Total: <span class="res-big">$${(v[0]*(1+v[1]/100)).toFixed(2)}</span>` },
    tip: { title: "Tip Calculator", icon: "fa-coins", inputs: [{id:"b", label:"Bill"}, {id:"t", label:"Tip %"}], article: "Calculate the right tip amount for your service bill.", logic: (v) => `Tip: <span class="res-big">$${(v[0]*v[1]/100).toFixed(2)}</span>` },
    compound: { title: "Investment", icon: "fa-chart-line", inputs: [{id:"p", label:"Principal"}, {id:"r", label:"Rate %"}, {id:"t", label:"Years"}], article: "See how your savings grow over time with compound interest.", logic: (v) => `Future Val: <span class="res-big">$${(v[0]*Math.pow(1+v[1]/100,v[2])).toFixed(2)}</span>` },
    profit: { title: "Profit Margin", icon: "fa-chart-pie", inputs: [{id:"c", label:"Cost"}, {id:"s", label:"Sell Price"}], article: "Determine the profit percentage of your sales.", logic: (v) => `Margin: <span class="res-big">${((v[1]-v[0])/v[1]*100).toFixed(1)}%</span>` },

    // MATH
    percentage: { title: "Percentage", icon: "fa-percent", inputs: [{id:"p", label:"%"}, {id:"v", label:"Of Value"}], article: "A simple tool to find percentages of any number.", logic: (v) => `Result: <span class="res-big">${(v[0]/100*v[1]).toFixed(2)}</span>` },
    sqrt: { title: "Square Root", icon: "fa-square", inputs: [{id:"n", label:"Number"}], article: "Find the square root of any positive number instantly.", logic: (v) => `√: <span class="res-big">${Math.sqrt(v[0]).toFixed(2)}</span>` },
    power: { title: "Power (x^y)", icon: "fa-superscript", inputs: [{id:"x", label:"Base"}, {id:"y", label:"Exp"}], article: "Calculate the power of a number with base and exponent.", logic: (v) => `Result: <span class="res-big">${Math.pow(v[0],v[1])}</span>` },
    average: { title: "Average", icon: "fa-divide", inputs: [{id:"n1", label:"Num 1"}, {id:"n2", label:"Num 2"}], article: "Find the mean (average) of two numbers.", logic: (v) => `Mean: <span class="res-big">${(parseFloat(v[0])+parseFloat(v[1]))/2}</span>` },
    circle: { title: "Circle Area", icon: "fa-circle", inputs: [{id:"r", label:"Radius"}], article: "Calculate the area of a circle using the radius.", logic: (v) => `Area: <span class="res-big">${(Math.PI * v[0]**2).toFixed(2)}</span>` },

    // CONVERTERS
    length: { title: "CM to Inches", icon: "fa-ruler", inputs: [{id:"c", label:"CM"}], article: "Convert metric centimeters to imperial inches.", logic: (v) => `Inches: <span class="res-big">${(v[0]/2.54).toFixed(2)}"</span>` },
    weight: { title: "KG to Lbs", icon: "fa-balance-scale", inputs: [{id:"k", label:"KG"}], article: "Convert kilograms to pounds for weight tracking.", logic: (v) => `Lbs: <span class="res-big">${(v[0]*2.204).toFixed(2)}</span>` },
    temp: { title: "Celsius to F", icon: "fa-temperature-half", inputs: [{id:"c", label:"Celsius"}], article: "Quickly convert Celsius temperatures to Fahrenheit.", logic: (v) => `Fahr: <span class="res-big">${(v[0]*9/5+32).toFixed(1)}°F</span>` },
    fuel: { title: "Fuel Economy", icon: "fa-gas-pump", inputs: [{id:"d", label:"KM"}, {id:"f", label:"Liters"}], article: "Check how fuel-efficient your vehicle is per 100km.", logic: (v) => `L/100km: <span class="res-big">${(v[1]/v[0]*100).toFixed(1)}</span>` },
    speed: { title: "KMH to MPH", icon: "fa-tachometer-alt", inputs: [{id:"s", label:"KM/H"}], article: "Convert kilometers per hour to miles per hour.", logic: (v) => `MPH: <span class="res-big">${(v[0]*0.621).toFixed(1)}</span>` },

    // TEXT
    password: { title: "Pass Generator", icon: "fa-key", inputs: [{id:"l", label:"Length"}], article: "Generate secure, random passwords for your accounts.", logic: (v) => `Pass: <span class="res-big" style="font-size:1.1rem">${Math.random().toString(36).slice(-v[0])}</span>` },
    binary: { title: "Binary Conv", icon: "fa-microchip", inputs: [{id:"d", label:"Decimal"}], article: "Convert standard decimal numbers to binary code.", logic: (v) => `Bin: <span class="res-big">${parseInt(v[0]).toString(2)}</span>` },
    words: { title: "Word Counter", icon: "fa-keyboard", inputs: [{id:"t", label:"Text", type:"text"}], article: "Count words and characters in your text block.", logic: (v) => `Words: <span class="res-big">${v[0].trim().split(/\s+/).length}</span>` },
    case: { title: "Uppercase", icon: "fa-font", inputs: [{id:"t", label:"Text", type:"text"}], article: "Convert any text to all uppercase characters.", logic: (v) => `<span class="res-big" style="font-size:1rem">${v[0].toUpperCase()}</span>` },
    reverse: { title: "Reverse Text", icon: "fa-undo", inputs: [{id:"t", label:"Text", type:"text"}], article: "Flip your text backwards for fun or encoding.", logic: (v) => `<span class="res-big" style="font-size:1.1rem">${v[0].split('').reverse().join('')}</span>` }
};

let currentId = 'bmi';

function toggleMenu() { document.getElementById('sidebar').classList.toggle('open'); }

function filterTools() {
    const val = document.getElementById('toolSearch').value.toLowerCase();
    renderNav(val);
}

function renderNav(filter = '') {
    const nav = document.getElementById('sideNav');
    nav.innerHTML = Object.keys(toolData)
        .filter(id => toolData[id].title.toLowerCase().includes(filter))
        .map(id => `
            <div class="nav-item ${id === currentId ? 'active' : ''}" onclick="loadTool('${id}')">
                <i class="fas ${toolData[id].icon}"></i> ${toolData[id].title}
            </div>
        `).join('');
}

function loadTool(id) {
    currentId = id;
    const t = toolData[id];
    document.getElementById('toolTitle').innerText = t.title;
    document.getElementById('articleContent').innerText = t.article;
    document.getElementById('inputGrid').innerHTML = t.inputs.map(i => `
        <div class="field"><label>${i.label}</label><input type="${i.type||'number'}" id="${i.id}"></div>
    `).join('');
    document.getElementById('bmi-meter-wrapper').style.display = 'none';
    document.getElementById('resultDisplay').innerHTML = '<p class="placeholder-text">Enter values to see result</p>';
    if(window.innerWidth < 768) document.getElementById('sidebar').classList.remove('open');
    renderNav();
}

function executeCalculation() {
    const vals = toolData[currentId].inputs.map(i => document.getElementById(i.id).value);
    document.getElementById('resultDisplay').innerHTML = toolData[currentId].logic(vals);
}

window.onload = () => { renderNav(); loadTool('bmi'); };
