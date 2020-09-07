

function covidGraphic(Cases,Deaths,Dates){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: Dates,
            datasets: [{
                label: 'Заболевания',
                fill: false,
                borderColor: 'yellow',
                data: Cases
            },{
                label: 'Смерти',
                fill: false,
                borderColor: 'red',
                data: Deaths       
            }
            ]
        },
        options: {
        scales: {
          xAxes: [{
            ticks: {
              reverse: true,
            }
          }]
        }
      }
   
    });
}

//Класс для сортировки по страннам
class Country {
  constructor(Name, Cases, Deaths, pop) {
    this.Name = Name;
    this.Cases = Cases;
    this.Deaths = Deaths;
    this.pop = pop; //population
  }
}


class TableApp extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    };
  }
	

	componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json/'
    console.debug(proxyUrl + targetUrl);
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            records: result.records
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

	render() {
      
    
    //Таблица
    //Отделяем и складываем заболевание по 1 стране
    var getCases = this.state.records.reduce((casesMemo, { countriesAndTerritories, cases}) => {
      (casesMemo[countriesAndTerritories] = casesMemo[countriesAndTerritories] || []).push(cases);
      return casesMemo;
    }, {});
     ;
    var Cases = [];
    (Object.values(getCases)) .forEach(element =>{
        var total = 0;
        element.forEach(i => {
            total = total + i;
        })
        Cases.push(total);

    })

    //Отделяем и складываем смерти по 1 стране
    var getDeaths = this.state.records.reduce((deathsMemo, { countriesAndTerritories, deaths}) => {
      (deathsMemo[countriesAndTerritories] = deathsMemo[countriesAndTerritories] || []).push(deaths);
      return deathsMemo;
    }, {});
     ;
    var Deaths = [];
    (Object.values(getDeaths)) .forEach(element =>{
        var total = 0;
        element.forEach(i => {
            total = total + i;
        })
        Deaths.push(total);

    })


    //Отделяем Популяцию по 1 стране
    var getPop = this.state.records.reduce((popMemo, { countriesAndTerritories, popData2019}) => {
      (popMemo[countriesAndTerritories] = popMemo[countriesAndTerritories] || []).push(popData2019);
      return popMemo;
    }, {});
     ;
    var Pop = [];
    (Object.values(getPop)) .forEach(element =>{
        
        Pop.push(element[0]);

    })

     var getNames = this.state.records.reduce((casesMemo, { countriesAndTerritories}) => {
      (casesMemo[countriesAndTerritories] = casesMemo[countriesAndTerritories] || []).push(countriesAndTerritories);
      return casesMemo;
    }, {});

      var Names = [];
      (Object.values(getNames)) .forEach(element =>{
        
        Names.push(element[0]);

    })


 
  var b = []; 
  for(var i = 0;i<= Cases.length;i++){
    var a = new Country();
    a.Name = Names[i];
    a.Cases = Cases[i];
    a.Deaths = Deaths[i];
    a.Pop = Pop[i];
    b.push(a);
  }


  //График
  //Отделяем и складываем заболевание по 1 дате
  var getCases = this.state.records.reduce((casesMemo, { dateRep, cases}) => {
      (casesMemo[dateRep] = casesMemo[dateRep] || []).push(cases);
      return casesMemo;
    }, {});
     ;
    var Cases = [];
    (Object.values(getCases)) .forEach(element =>{
        var total = 0;
        element.forEach(i => {
            total = total + i;
        })
        Cases.push(total);

    })

    //Отделяем и складываем смерти по 1 дате
    var getDeaths = this.state.records.reduce((deathsMemo, { dateRep, deaths}) => {
      (deathsMemo[dateRep] = deathsMemo[dateRep] || []).push(deaths);
      return deathsMemo;
    }, {});
     ;
    var Deaths = [];
    (Object.values(getDeaths)) .forEach(element =>{
        var total = 0;
        element.forEach(i => {
            total = total + i;
        })
        Deaths.push(total);

    })

    //Получаем даты
    var getDates = this.state.records.reduce((dateMemo, { dateRep}) => {
      (dateMemo[dateRep] = dateMemo[dateRep] || []).push(dateRep);
      return dateMemo;
    }, {});

      var Dates = [];
      (Object.values(getDates)) .forEach(element =>{
        
        Dates.push(element[0]);

    })


    covidGraphic(Cases,Deaths,Dates);  

	return(

    <>
    <thead>
          <tr>
            <th>Страна</th>
            <th>Количество случаев</th>
            <th>Количество смертей</th>
            <th>Количество случаев на 1000 жителей</th>
            <th>Количество смертей на 1000 жителей</th>
          </tr>
        </thead>
        <tbody>
        {
        b.map((element) =>{
         return ( 
                <tr key= {element.Name}>
                  <td>{element.Name}</td>
                  <td>{element.Cases}</td>
                  <td>{element.Deaths}</td>
                  <td>{(element.Cases*1000/element.Pop).toFixed(3)}</td>
                  <td>{(element.Deaths*1000/element.Pop).toFixed(3)}</td>
                </tr>
            ) 
          })
        }

     </tbody>
     </>
    )

	}
}


ReactDOM.render(<TableApp />, document.getElementById('root'))
