import React from "react";
import GridContainer from "./gridContainer";
import Grid from "./grid";
import Column from "./column";
import imga from "./images/boud.jpg";
import imgb from "./images/chit.webp";
import imgc from "./images/bkt.jpg";
import AddPlace from "./addPlace";
import {  useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

export default function LoginHome(props) {
  const [lat1, setlat1] = useState(27.7172);
  const [lng1, setlng1] = useState(85.324);
  const center = { lat: lat1, lng: lng1 };
  const location = useLocation();
  const { destination } = location.state || {};
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();
  const locationRef = useRef();
  const data = ['item 1','item 2','item 3'];

  function Point() {
    if (locationRef.current.value === "") {
      return;
    }
    
    const apiKey = "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q";
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${locationRef.current.value}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          setlat1(lat);
          setlng1(lng);
        } else {
          console.log(
            "Geocoding failed. Please check the address and API key."
          );
        }
      });
  }

  if (!isLoaded) {
    return <SkeletonText />;
  }




  console.log(props.result)

  return (
    
    <div className="fit">
      <div className="grid-container ">
        <div className="column1">
          <div className="accordion" id="accordionExample11">
            <div className="accordion-item">
              <h2 className="accordion-header">
             
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne11"
                  aria-expanded="true"
                  aria-controls="collapseOne11"
                >
                  Overview
                </button>
              </h2>
              <div
                id="collapseOne11"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo22"
                  aria-expanded="false"
                  aria-controls="collapseTwo22"
                >
                  Itinerary
                </button>
              </h2>
              <div
                id="collapseTwo22"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree33"
                  aria-expanded="false"
                  aria-controls="collapseThree33"
                >
                  Expenses
                </button>
              </h2>
              <div
                id="collapseThree33"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <GridContainer>
            <Grid>
              <Column>
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active fixx">
                      <img src={imga} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item fixx">
                      <img src={imgb} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item fixx">
                      <img src={imgc} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="contact-short1">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <h1>
                      Trip to <span> </span>
                    </h1>
                  </div>
                  </div>
                  <h1 className="alignCenter quicksand20">Itinerary</h1>
                
               <br/>
               

                {/*data.map((item, index) => (
                  <p key={index}>  {props.setData(index)}                                       </p>
                ))*/}<AddPlace/> 

                <Box flexGrow={1}>
                <Autocomplete>
                  <Input
                    type="text"
                    placeholder="Add a place"
                    ref={locationRef}
                  />
                  
                </Autocomplete>
              </Box>               <Button colorScheme="purple" type="submit" onClick={Point}>
              Submit
            </Button>  
        
              </Column>
            </Grid>
          </GridContainer>
        </div>
        <div className="column3">
          <Flex
            position="relative"
            flexDirection="column"
            alignItems="center"
            h="100vh"
          >
            <Box position="absolute" left={0} top={0} h="100%" w="100%">
              {/* Google Map Box */}
              <GoogleMap
                center={center}
                zoom={13}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: true,
                  streetViewControl: true,
                  mapTypeControl: true,
                  fullscreenControl: false,
                }}
                onLoad={(map) => setMap(map)}
              >
                <Marker position={center} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
            </Box>
            
          </Flex>
        </div>
      </div>

    </div>
  );
}
