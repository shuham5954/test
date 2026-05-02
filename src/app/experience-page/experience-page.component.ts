import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Style, Circle as CircleStyle, Fill, Stroke, Text } from 'ol/style';


@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
}) 
export class ExperiencePageComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initMap();
  }

   initMap() {

    const locations = [
      { name: 'Vadodara', coords: [73.1812, 22.3072], count: 3 },
      { name: 'Udaipur', coords: [73.7125, 24.5854], count: 1 },
      { name: 'Kolkata', coords: [88.3639, 22.5726], count: 1 },
      { name: 'Mehsana', coords: [72.3936, 23.5880], count: 2 },
      { name: 'Pune', coords: [73.8567, 18.5204], count: 1 },
      { name: 'Varanasi', coords: [82.9739, 25.3176], count: 1 },
      { name: 'Rajkot', coords: [70.8022, 22.3039], count: 2 },
      { name: 'Karnataka', coords: [75.7139, 15.3173], count: 1 },
      { name: 'Surat', coords: [72.8311, 21.1702], count: 2 },
      { name: 'Ahmedabad', coords: [72.5714, 23.0225], count: 2 },
      { name: 'Jaipur', coords: [75.7873, 26.9124], count: 2 },
      { name: 'Belagavi', coords: [74.4977, 15.8497], count: 2 }
    ];

    const features = locations.map(loc => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(loc.coords)),
        name: loc.name,
        count: loc.count
      });

      feature.setStyle(
        new Style({
          image: new CircleStyle({
            radius: 10 + loc.count * 2, // bigger circle for higher N
            fill: new Fill({ color: '#2563EB' }),
            stroke: new Stroke({ color: '#ffffff', width: 2 })
          }),
          text: new Text({
            text: `${loc.count}`,
            fill: new Fill({ color: '#fff' }),
          })
        })
      );

      return feature;
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: features
      })
    });

    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([78.9629, 22.5937]), // India center
        zoom: 5
      })
    });
  }
  readonly sectionTitle = 'Site Network';

  readonly sectionContent =
    'At PharosCura Clinical Services, we operate a highly efficient and dependable clinical trial site management network across India—built to accelerate study timelines, ensure regulatory compliance, and deliver consistent, high-quality operational excellence.';

  readonly boxContent: string[] = [
    '15+ High-Performing Clinical Trial Sites Across India',
    'Strategically Located for Faster Patient Access & Nationwide Reach',
    'Driving Inclusive Recruitment with Diverse Patient Populations',
    'Experienced Investigators Across Key Therapeutic Areas',
    'Diverse Site Network—Government, Private & Specialty Hospitals',
    'Reliable Execution Backed by Strong Quality Systems'
  ];

  readonly mapDots = [
    { city: 'Vadodara', count: 3, top: 59, left: 29 },
    { city: 'Udaipur', count: 1, top: 44, left: 26 },
    { city: 'Kolkata', count: 1, top: 52, left: 73 },
    { city: 'Mehsana', count: 2, top: 38, left: 27 },
    { city: 'Pune', count: 1, top: 67, left: 31 },
    { city: 'Varanasi', count: 1, top: 43, left: 55 },
    { city: 'Rajkot', count: 2, top: 50, left: 22 },
    { city: 'Karnataka', count: 1, top: 77, left: 33 },
    { city: 'Surat', count: 2, top: 61, left: 26 },
    { city: 'Ahmedabad', count: 2, top: 48, left: 27 },
    { city: 'Jaipur', count: 2, top: 37, left: 33 },
    { city: 'Belagavi', count: 2, top: 73, left: 31 }
  ];
}
