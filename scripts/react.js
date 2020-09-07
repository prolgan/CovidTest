function CovidData(data){
	return (
      <ul>
          <li>
            {data.covid.countriesAndTerritories} {data.covid.deaths}
          </li>
      </ul>
    )
  }

class App extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    };
  }
	//state = {
	//	records: [
	//		{countriesAndTerritories: 'Latvia',deaths: 100 }
	//	]
	//}

	componentDidMount() {
    fetch("https://opendata.ecdc.europa.eu/covid19/casedistribution/json/")
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
		return (
			<div>
			{ this.state.records.map(covid => {
					return (
						<CovidData covid={covid} key={covid.countryterritoryCode + covid.dateRep}/>
						)
				}) 
			}	
			</div>
		)	
	}
}


ReactDOM.render(<App />, document.getElementById('root'))
