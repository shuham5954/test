import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [NgFor , NgClass , NgIf],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

  public servicesData = [
    {
      "id": 1,
      "header": "Clinical Trial Design & Planning",
      "description": "We meticulously design and plan clinical trials, ensuring methodological rigor and strategic foresight to facilitate the path to groundbreaking discoveries and improved patient outcomes.",
      "imgUrl": "1_Clinical_Trial_Design_Planning.jpg"
    },
    {
      "id": 2,
      "header": "Training",
      "description": "We provide comprehensive training programs to equip clinical research professionals with the necessary skills and knowledge, promoting excellence in clinical trial conduct.",
      "imgUrl": "2_Training.jpg"
    },
    {
      "id": 3,
      "header": "Clinical Data Management",
      "description": "Our advanced data management solutions ensure precise and efficient handling of clinical trial data, integrating accuracy with innovation in the pursuit of medical excellence.",
      "imgUrl": "3_Clinical_Data_Management.jpg"
    },
    {
      "id": 4,
      "header": "Audit & Regulatory Compliance",
      "description": "We offer thorough audit services to ensure adherence to regulatory standards, maintaining the highest levels of compliance, integrity, and quality throughout every phase of your clinical trials.",
      "imgUrl": "4_Audit_Regulatory_Compliance.jpg"
    },
    {
      "id": 5,
      "header": "Site Selection and Activation",
      "description": "Leveraging our extensive network, we identify optimal sites for your clinical trials and streamline the activation process, expediting study start-up timelines.",
      "imgUrl": "5_Site_Selection and_Activation.jpg"
    },
    {
      "id": 6,
      "header": "Study Management",
      "description": "Our experienced team oversees all aspects of study conduct, including patient recruitment, regulatory compliance, data collection, and site performance monitoring, ensuring adherence to protocol requirements.",
      "imgUrl": "6_Study Management.jpg"
    },
    {
      "id": 7,
      "header": "Quality Assurance",
      "description": "We implement robust quality assurance measures to uphold the integrity and reliability of clinical trial data, conducting regular audits and inspections to maintain compliance with regulatory standards.",
      "imgUrl": "7_Quality_Assurance.jpg"
    },
    {
      "id": 8,
      "header": "Patient Engagement",
      "description": "Through targeted outreach and engagement strategies, we enhance patient recruitment and retention, fostering positive relationships between investigators and study participants.",
      "imgUrl": "8_Patient_Engagement.jpg"
    },
    {
      "id": 9,
      "header": "Patient-Centric Approach",
      "description": "We prioritize the needs and well-being of study participants, ensuring that clinical trials are conducted with the highest ethical standards and respect for human dignity.",
      "imgUrl": "9_Patient_Centric_Approach.png"
    },
    {
      "id": 10,
      "header": "Regulatory Expertise",
      "description": "Navigating the complex landscape of regulatory requirements, our team of experts provides guidance and support to ensure compliance with local and international regulations, minimizing delays and ensuring smooth study execution.",
      "imgUrl": "10_Regulatory Expertise.jpg"
    },
    {
      "id": 11,
      "header": "Continuous Improvement",
      "description": "We are committed to continuous improvement, utilizing feedback mechanisms and performance metrics to identify areas for optimization, implementing proactive measures to drive efficiency and quality in clinical trial operations.",
      "imgUrl": "11_Continuous Improvement.jpg"
    }
  ]
    

}
