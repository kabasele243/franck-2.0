import React from 'react';
import Image from '../elements/Image';

// Importing icons (ensure these exist, or replace with font awesome/react-icons)
import imgReact from './../../assets/images/React-icon.svg';
import imgJS from './../../assets/images/javascript.svg';
import imgGQL from './../../assets/images/gql.svg';
import imgMongo from './../../assets/images/mongodb.svg';
import imgNode from './../../assets/images/Node.js_logo.svg';
import imgAWS from './../../assets/images/aws.svg';

const FeaturesTiles = ({ className, ...props }) => {

  const tiles = [
    {
      img: imgReact,
      title: "React Ecosystem",
      desc: "Advanced patterns, Context API, Hooks, and Next.js for server-side rendering."
    },
    {
      img: imgNode,
      title: "Node.js",
      desc: "Building high-throughput, event-driven microservices and REST APIs."
    },
    {
      img: imgAWS,
      title: "AWS Cloud",
      desc: "Serverless architecture (Lambda), SQS for message queuing, and DynamoDB."
    },
    {
      img: imgGQL,
      title: "GraphQL",
      desc: "Efficient data fetching with Apollo Client and server-side schema design."
    },
    {
      img: imgMongo,
      title: "Database Design",
      desc: "NoSQL modeling, aggregation pipelines, and performance indexing."
    },
    {
      img: imgJS,
      title: "TypeScript",
      desc: "Writing robust, type-safe code to reduce runtime errors and improve maintainability."
    }
  ];

  return (
    <section className={`relative ${className}`} {...props}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {tiles.map((tile, index) => (
            <div key={index} className="bg-[#151719] p-6 rounded-xl border border-slate-800 hover:border-accent-teal/50 transition-colors duration-300 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-bg-DEFAULT rounded-full border border-slate-700 group-hover:border-accent-cyan/30 transition-colors">
                <Image
                  src={tile.img}
                  alt={tile.title}
                  width={48}
                  height={48}
                  className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-white font-bold mb-2">{tile.title}</h4>
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