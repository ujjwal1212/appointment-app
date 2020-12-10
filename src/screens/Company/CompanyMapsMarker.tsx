import React from 'react';
import { StyleSheet,View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { ICompany } from '../../constants/Company';
interface IProps {
  companies: Array<ICompany>;
  followLocation: (company: ICompany) => void;
  region: Region;
  onRegionChange: (region: Region) => void;
}

export default class CompanyMapsMarker extends React.Component<IProps> {
  public map: any;
  constructor(props: IProps) {
    super(props);
  }

  onMapReady = () => {
    const markers = Object
    .keys(this.props.companies)
    .map((key: any) => this.props.companies[key].id);
    this.map.fitToSuppliedMarkers(markers, {animated: true});
  }

  public render = () => {
    const { companies, followLocation, region } = this.props;
    return (
      <MapView
        ref={ref =>  this.map = ref }
        style={styles.map}
      >
        { Object.keys(companies).map((key: any) => {
          const company = Object.assign({},companies[key]);
          if(company.latitude && company.latitude) {
            return (
              <Marker
                identifier={company.name}
                ref={"ref"+company.id}
                key={"key"+company.id}
                coordinate={{latitude:parseFloat(company.latitude),longitude:parseFloat(company.longitude)}}
                title={company.name}
                description={`${company.address}, ${company.city}`}
                onSelect={()=>followLocation(company)}
                pinColor="blue"
             />
            ) 
          }
        })}
        <View/>
      </MapView>
    );
  }
}

var styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'green'
  },
  getDirectionText:{
    textDecorationLine:'underline',
    paddingTop:20,
    fontSize:9,
  },
  companyName : {
    fontSize:9,
    padding:5,
    color:'black',
    fontWeight:'400'
  }
});