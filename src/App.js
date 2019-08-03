import React, { Component } from "react";
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import {Container, Col, Row} from 'react-bootstrap';


const API_KEY = "f525ab2b08b02345263cf7db59107bee"

class App extends Component {
  state = {
    city: undefined,
    temperature: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    wind: undefined,
    description: undefined,
    error: undefined

  }

  setSunrise = () => {
    var date = new Date(this.state.sunrise * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    this.setState({ sunrise: formattedTime })
  }

  setSunset = () => {
    var date = new Date(this.state.sunset * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    this.setState({ sunset: formattedTime })
  }
  setCity = (newCity) => {
    this.setState({ city: newCity })
  }

  translateDescription = () => {
    if (this.state.description === "light rain") {
      this.setState({ description: "lekki deszcz" })

    } else if (this.state.description === "few clouds") {
      this.setState({ description: "niewielkie zachmurzenie" })

    } else if (this.state.description === "scattered clouds") {
      this.setState({ description: "rozproszone chmury" })

    } else if (this.state.description === "broken clouds") {
      this.setState({ description: "przejaśnienia" })

    } else if (this.state.description === "shower rain") {
      this.setState({ description: "lekki deszcz" })

    } else if (this.state.description === "rain") {
      this.setState({ description: "deszcz" })

    } else if (this.state.description === "thunderstorm") {
      this.setState({ description: "burza" })

    } else if (this.state.description === "thunderstorm with rain") {
      this.setState({ description: "burza i deszcz" })

    } else if (this.state.description === "thunderstorm with heavy rain") {
      this.setState({ description: "burza i deszcz" })

    } else if (this.state.description === "light thunderstorm") {
      this.setState({ description: "lekka burza" })

    } else if (this.state.description === "heavy thunderstorm") {
      this.setState({ description: "ciężka burza z piorunami" })

    } else if (this.state.description === "ragged thunderstorm") {
      this.setState({ description: "przejściowe burze" })

    } else if (this.state.description === "thunderstorm with light drizzle") {
      this.setState({ description: "burza z lekką mżawką" })

    } else if (this.state.description === "thunderstorm with drizzle") {
      this.setState({ description: "burza z  mżawką" })

    } else if (this.state.description === "thunderstorm with heavy drizzle") {
      this.setState({ description: "burza z silną mżawką" })

    } else if (this.state.description === "heavy intensity drizzle") {
      this.setState({ description: "intensywna mżawka" })

    } else if (this.state.description === "light intensity drizzle rain") {
      this.setState({ description: "mżawka, deszcz, natężenie światła" })

    } else if (this.state.description === "drizzle rain") {
      this.setState({ description: "deszcz, mżawka" })

    } else if (this.state.description === "heavy intensity drizzle rain") {
      this.setState({ description: "intensywna mżawka" })

    } else if (this.state.description === "shower rain and drizzle") {
      this.setState({ description: "deszcz" })

    } else if (this.state.description === "heavy shower rain and drizzle") {
      this.setState({ description: "ulewny deszcz i mżawka" })

    } else if (this.state.description === "shower drizzle") {
      this.setState({ description: "mżawka" })
    }

    else if (this.state.description === "drizzle") {
      this.setState({ description: "mżawka" })

    } else if (this.state.description === "light rain") {
      this.setState({ description: "lekki deszcz" })

    } else if (this.state.description === "moderate rain") {
      this.setState({ description: "umiarkowane opady" })

    } else if (this.state.description === "heavy intensity rain") {
      this.setState({ description: "mocne opady deszczu" })

    } else if (this.state.description === "very heavy rain") {
      this.setState({ description: "mocne opady deszczu" })

    } else if (this.state.description === "extreme rain") {
      this.setState({ description: "ulewa" })

    } else if (this.state.description === "freezing rain") {
      this.setState({ description: "marznący deszcz" })

    } else if (this.state.description === "light intensity shower rain") {
      this.setState({ description: "lekki deszcz" })

    } else if (this.state.description === "shower rain") {
      this.setState({ description: "deszcz" })
    }

    else if (this.state.description === "heavy intensity shower rain") {
      this.setState({ description: "intensywny deszcz" })

    } else if (this.state.description === "ragged shower rain") {
      this.setState({ description: "przejściowe opady deszczu" })

    } else if (this.state.description === "Snow") {
      this.setState({ description: "śnieg" })

    } else if (this.state.description === "Heavy snow") {
      this.setState({ description: "Mocne opady śniegu" })

    } else if (this.state.description === "Sleet") {
      this.setState({ description: "śnieg z deszczem" })

    } else if (this.state.description === "Light shower sleet") {
      this.setState({ description: "śnieg z deszczem" })

    } else if (this.state.description === "Shower sleet") {
      this.setState({ description: "śnieg z deszczem" })

    } else if (this.state.description === "Light rain and snow") {
      this.setState({ description: "śnieg z deszczem" })

    } else if (this.state.description === "Rain and snow") {
      this.setState({ description: "deszcz i śnieg" })

    } else if (this.state.description === "Light shower snow") {
      this.setState({ description: "lekkie opady śniegu" })

    } else if (this.state.description === "Shower snow") {
      this.setState({ description: "lekki śnieg" })

    } else if (this.state.description === "Heavy shower snow") {
      this.setState({ description: "opady śniegu" })

    } else if (this.state.description === "Smoke") {
      this.setState({ description: "smog" })

    } else if (this.state.description === "Haze") {
      this.setState({ description: "mgła" })

    } else if (this.state.description === "sand/ dust whirls") {
      this.setState({ description: "wiry piasku / pyłu" })

    } else if (this.state.description === "fog") {
      this.setState({ description: "mgła" })

    } else if (this.state.description === "sand") {
      this.setState({ description: "piasek" })

    } else if (this.state.description === "dust") {
      this.setState({ description: "kurz" })

    } else if (this.state.description === "volcanic ash") {
      this.setState({ description: "pył wulkaniczny" })

    } else if (this.state.description === "squalls") {
      this.setState({ description: "szkwał" })

    } else if (this.state.description === "tornado") {
      this.setState({ description: "tornado" })

    } else if (this.state.description === "scattered clouds") {
      this.setState({ description: "rozproszone chmury" })

    } else if (this.state.description === "broken clouds") {
      this.setState({ description: "zachmurzenie z przejaśnieniami chmury" })

    } else if (this.state.description === "overcast clouds") {
      this.setState({ description: "duże zachmurzenie" })

    } else if (this.state.description === "few clouds") {
      this.setState({ description: "niewielkie zachmurzenie" })

    } else if (this.state.description === "clear sky") {
      this.setState({ description: "czyste niebo" })

    }
  }



  getWeather = async (e) => {
    e.preventDefault()

    try {

      const city = e.target.elements.city.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      const data = await api_call.json()

      if (city) {
        console.log(data);

        this.setState({
          city: data.name,
          temperature: data.main.temp,
          pressure: data.main.pressure,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          wind: data.wind.speed,
          description: data.weather[0].description,
          // tu byla tablica
          error: ""
        });
        this.setSunset()
        this.setSunrise()
        this.translateDescription()


      }

      else {

        this.setState({
          city: undefined,
          temperature: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          wind: undefined,
          description: undefined,
          error: "Proszę podać nawę miejscowości"

        });

      }
    } catch (error) {
      this.setState({
        city: undefined,
        temperature: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        wind: undefined,
        description: undefined,
        error: "Nie znaleziono takiej miejscowości"

      });

    }

  }


  render() {

    return (
  

          <Container fluid>
          <Row className="justify-content-center main">
              <Col  xs={12} lg={6} md={12} sm={12}  className=" title-container">

                      <Titles />
                    </Col>
            <Col xs={12} lg={6} md={12} sm={12}  className="form-container">
                
                      <Form
                        getWeather={this.getWeather}
                        setSunrise={this.setSunrise} />

                      <Weather
                        city={this.state.city}
                        setCity={this.setCity}
                        temperature={this.state.temperature}
                        pressure={this.state.pressure}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        wind={this.state.wind}
                        description={this.state.description}
                        error={this.state.error}
                        setSunrise={this.setSunrise}
                      />

                    </Col>
                  </Row>
                </Container>
     
    );
  }
}
export default App;


