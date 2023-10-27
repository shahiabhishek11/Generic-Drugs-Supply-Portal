import React  from 'react';

class SearchMedicines extends React.Component {
    constructor(props){
        super(props);
       this.state={
           medicines:[]
       }
    }

    componentDidMount=()=>{
      fetch("http://localhost:8080/allmedicines")
      .then(resp =>resp.json())
      .then(data => this.setState({medicines:data}))
    }
    render(){
       return(
          <div>
              Select Medicines:
              <select name="medicine">
                 {
                     this.state.medicines.map(
                        medicine=>
                        {
                            return(<option value={medicine.pid}>{medicine.pname}</option>)
                        }
                     )
                 } 
              </select> 
          </div>

       );

    }
}

export default SearchMedicines;
/*go to app.js div add nav tag and then add link tag =<Link"searchmedicines">Search Medicines</Link>*/ 
/*another div in that tag =<Route path ="serchmedicines" component={SearchMedicines}/>*/