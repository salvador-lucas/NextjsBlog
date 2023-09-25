import Image from 'next/image';
import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <section style={{ backgroundColor: '#cdb6f0' }}>
      <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'center' }}>
        <Image
          src="/images/seniorArana.jpeg"
          height={400}
          width={400}
          alt="senior"
          style={{ borderRadius: '50%', border: '0.4em solid #e9e4f2' }}
          layout="reponsive"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Welcome</h1>
        <p>lorem ipsum</p>
      </div>
    </section>
  );
};

export default Hero;
