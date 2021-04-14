import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/actions"


const BreweryList = (props) => {
    const { fetchData } = props;

    useEffect(()=>{
        fetchData()
    },[fetchData]);

return (
<div>
    {props}
</div>
)
}

const mapStateToProps = (state) => {
    return {
    breweries: state.breweries,
    loading: state.loading,
    error: state.error
    };
  };

  export default connect(mapStateToProps, {fetchData})(BreweryList)