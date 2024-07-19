import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Vaibhav Sharma',
    role: 'Execution Lead',
    description: 'Ensuring seamless operations and excellence',
    image: '/vb.jpg',
    linkedIn: 'https://www.linkedin.com/in/vaibhav-sharma-752611145/?originalSubdomain=in',
  },
  {
    name: 'Abhishek Singh',
    role: 'Development Lead',
    description: 'Spearheading development with technical expertise',
    image: '/one.png',
    linkedIn: 'https://www.linkedin.com/in/abhishek-kumar-singh-042b0a1b2/',
  },
  {
    name: 'Lakshya Rastogi',
    role: 'Marketing Lead',
    description: 'Empathy, creativity and precision. 3x mains UPSC',
    image: '/lr.jpeg',
    linkedIn: 'https://www.linkedin.com/in/lakshya-rastogi-b2a27618a/',
  },
];

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
      <path d="M15.8 1.3H4.2C2.9 1.3 1.8 2.4 1.8 3.7v12.6c0 1.3 1.1 2.4 2.4 2.4h11.6c1.3 0 2.4-1.1 2.4-2.4V3.7c0-1.3-1.1-2.4-2.4-2.4zM6.5 15.8H4.2V7.9h2.3v7.9zm-1.2-8.9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3zm9.3 8.9h-2.3v-3.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.9H7.4V7.9h2.2v1h.1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.5z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M18.9 4.7c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.5.7-2.4.9-.7-.7-1.7-1.2-2.8-1.2-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.2-.2-6-1.7-7.9-4C1.3 4.1 1 4.8 1 5.5c0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.5 2.7-1.3 1-2.9 1.6-4.7 1.6-.3 0-.6 0-.9-.1 1.7 1.1 3.7 1.7 5.8 1.7 7 0 10.8-5.8 10.8-10.8v-.5c.7-.6 1.4-1.2 1.9-1.9z" />
    </svg>
  );
}

function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
      <div className="mb-4 relative w-32 h-32 mx-auto">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1 text-black">{member.name}</h3>
      <p className="text-cyan-500 mb-2">{member.role}</p>
      <p className="text-gray-600 mb-4">{member.description}</p>
      <div className="flex justify-center space-x-4">
        <Link href={member.linkedIn} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:flex md:justify-between md:items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Team</h2>
            <p className="text-gray-400">Quality is our passion.</p>
          </div>
          {/* <button className="mt-4 md:mt-0 bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition duration-300">
            View all
          </button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}