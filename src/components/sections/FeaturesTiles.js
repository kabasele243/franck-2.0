import React from 'react';
import Image from '../elements/Image';

// Importing icons
import imgReact from './../../assets/images/React-icon.svg';
import imgJS from './../../assets/images/javascript.svg';
import imgGQL from './../../assets/images/gql.svg';
import imgMongo from './../../assets/images/mongodb.svg';
import imgNode from './../../assets/images/Node.js_logo.svg';
import imgAWS from './../../assets/images/aws.svg';

const FeaturesTiles = ({ className, ...props }) => {

  const tiles = [
    {
      img: imgNode,
      title: "Backend & Microservices",
      // Resume: Node.js, Go, Hapi.js, Express, Gin, Echo
      desc: "Architecting scalable, multi-tenant backend systems using Node.js and Go. Expertise in decoupling services via event-driven patterns (SQS/SNS, Kinesis)."
    },
    {
      img: imgAWS,
      title: "Cloud Infrastructure (AWS)",
      // Resume: AWS (Lambda, RDS, ECS, Kinesis, SQS...), Terraform, CDK
      desc: "Designing serverless and containerized environments (Lambda, Fargate, ECS). implementing Infrastructure as Code (IaC) with Terraform and AWS CDK."
    },
    {
      img: imgReact,
      title: "Modern Frontend",
      // Resume: React, Redux, Angular, TypeScript
      desc: "Building resilient, component-driven UIs with React and TypeScript. Focusing on performance, modularity, and strict type safety."
    },
    {
      img: imgMongo,
      title: "Data Strategy",
      // Resume: PostgreSQL, MongoDB, DynamoDB, SQL
      desc: "Implementing hybrid database strategies to ensure data integrity. Experienced with relational (PostgreSQL) and NoSQL (DynamoDB, MongoDB) modeling."
    },
    {
      img: imgGQL,
      title: "API Architecture",
      // Resume: GraphQL, REST, OpenAPI (Fern), JWT
      desc: "Designing secure, versioned APIs using GraphQL and REST standards (OpenAPI/Fern). managing authentication and data flow optimization."
    },
    {
      img: imgJS, // Using JS icon to represent 'Languages' generally
      title: "DevOps & Observability",
      // Resume: Docker, K8s, CI/CD, DataDog, Splunk
      desc: "Streamlining deployments with Docker, Kubernetes, and GitHub Actions. Ensuring reliability via DataDog, CloudWatch, and NewRelic monitoring suites."
    },
  ];

  return (
    <section className={`relative ${className}`} {...props}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {tiles.map((tile, index) => (
            <div key={index} className="bg-[#151719] p-6 rounded-xl border border-slate-800 hover:border-accent/40 hover:shadow-[0_0_15px_rgba(0,255,136,0.1)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-bg-DEFAULT rounded-full border border-slate-700 group-hover:border-accent/50 transition-colors">
                <Image
                  src={tile.img}
                  alt={tile.title}
                  width={48}
                  height={48}
                  className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-white font-bold mb-2 font-mono">{tile.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {tile.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturesTiles;