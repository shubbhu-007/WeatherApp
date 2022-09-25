const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
    event.preventDefault(); //form wale page kon dubara relaod hone se bachayega ? mark nhi aayega
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');

    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b33af1830b999ff1c12bf05cda430c90`
            const response = await fetch(url);//wait untill data get
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);

            city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const temp_mood = arrData[0].weather[0].main;




            //condition to check sunny or cloudy
            if (temp_mood === "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }
            else if (temp_mood === "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (temp_mood === "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide'); //agar data mil rha ahi to remove 

        } catch {
            city_name.innerText = `Plz enter the city name properly`
            datahide.classList.add('data_hide');
        }
        //koi error hoto catch kar sake



    }

}

submitBtn.addEventListener('click', getInfo);